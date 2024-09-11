-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Usuario` (
	`id_usuario` integer PRIMARY KEY,
	`nombre` text,
	`edad` integer,
	`correo` text,
	`contrasena` integer
);
--> statement-breakpoint
CREATE TABLE `Actividades` (
	`id_actividades` integer PRIMARY KEY,
	`actividad` text,
	`puntos` integer
);
--> statement-breakpoint
CREATE TABLE `Usuario_actividades` (
	`id_usuario` integer,
	`id_actividades` integer,
	FOREIGN KEY (`id_actividades`) REFERENCES `actividades`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id`) ON UPDATE no action ON DELETE no action
);

*/