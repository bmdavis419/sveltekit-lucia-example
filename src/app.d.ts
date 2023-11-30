// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// adds in some helpers from lucia
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	namespace Lucia {
		type Auth = import('./lib/server/auth/index').Auth;
		type DatabaseUserAttributes = {
			email: string;
			first_name: string;
			last_name: string;
		};
		type DatabaseSessionAttributes = object;
	}
}

export {};
