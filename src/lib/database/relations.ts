import { relations } from "drizzle-orm/relations";
import { actividades, usuarioActividades, usuario } from "./schema"

export const usuarioActividadesRelations = relations(usuarioActividades, ({one}) => ({
	actividade: one(actividades, {
		fields: [usuarioActividades.idActividades],
		references: [actividades.id]
	}),
	usuario: one(usuario, {
		fields: [usuarioActividades.idUsuario],
		references: [usuario.id]
	}),
}));

export const actividadesRelations = relations(actividades, ({many}) => ({
	usuarioActividades: many(usuarioActividades),
}));

export const usuarioRelations = relations(usuario, ({many}) => ({
	usuarioActividades: many(usuarioActividades),
}));