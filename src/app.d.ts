// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			user:{
				nombres: string
				correo: string
				password: string | null
				token: string | null
			}
			
		 }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};