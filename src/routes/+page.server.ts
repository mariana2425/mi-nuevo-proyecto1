import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import type { Actions } from './$types';
import { db } from '$lib/server/database/connect';
import { usuarios } from '$lib/server/database/data';
import type { RequestEvent } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';  

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(307, '/inicio'); // Asegúrate de lanzar un error para redireccionar
	}
}

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData());
		const password = String(data.password);

		// Validaciones
		if (
			typeof data.correo !== 'string' ||
			typeof data.password !== 'string' ||
			!data.correo ||
			!data.password
		) {
			return { invalid: true };
		}

		// Verificación en la base de datos
		const user = await db.select().from(usuarios).where(eq(usuarios.correo, data.correo));

		if (!user || user.length === 0 || !user[0].password) {
			return { credentials: true };
		}

		const findpass = await bcrypt.compare(password, user[0].password);

		if (!findpass) {
			return { credentials: true };
		}

		const authenticatedUser = crypto.randomUUID();

		await db
			.update(usuarios)
			.set({ token: authenticatedUser })
			.where(eq(usuarios.correo, data.correo));

		cookies.set('session', authenticatedUser, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30 // Vencimiento en 30 días
		});

		// Redirecciona al usuario a la página principal
		throw redirect(302, '/inicio');
	},

	register: async ({ request }: RequestEvent) => {
		const data = Object.fromEntries(await request.formData());
		if (
			typeof data.correo !== 'string' ||
			typeof data.password !== 'string' ||
			typeof data.nombre !== 'string' ||
			!data.correo ||
			!data.password ||
			!data.nombre
		) {
			return fail(400, { invalid: true });
		}

		const user = await db.select().from(usuarios).where(eq(usuarios.correo, data.correo));

		if (user.length > 0) {
			return fail(400, { user: true });
		}

		const values = {
			nombres: data.nombre || "",
			correo: data.correo || "",
			password: await bcrypt.hash(data.password, 10),
			token: crypto.randomUUID(),
		};

		try {
			await db.insert(usuarios).values(values);
			// Redirecciona a la página principal después del registro
			throw redirect(303, '/inicio');
		} catch (error) {
			console.error('Error al insertar el usuario:', error);
			return fail(500, { message: 'Ocurrió un error al registrar el usuario.' });
		}
	}
};