import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usuario = sqliteTable("Usuario", {
	id: integer("id").primaryKey(),
	nombre: text("nombre"),
	edad: integer("edad"),
	correo: text("correo"),
	contrasena: integer("contrasena"),
});

export const actividades = sqliteTable("Actividades", {
	id: integer("id").primaryKey(),
	actividad: text("actividad"),
	puntos: integer("puntos"),
});

export const usuarioActividades = sqliteTable("Usuario_actividades", {
	idUsuario: integer("id_usuario").references(() => usuario.id),
	idActividades: integer("id_actividades").references(() => actividades.id),
});