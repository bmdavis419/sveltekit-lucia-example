import { lucia } from 'lucia';
import { libsql } from '@lucia-auth/adapter-sqlite';
import { libsqlClient } from '../db';
import { sveltekit } from 'lucia/middleware';

export const auth = lucia({
	adapter: libsql(libsqlClient, {
		user: 'user',
		key: 'user_key',
		session: 'user_session'
	}),
	env: 'DEV',
	// gives us a bunch of helper functions
	middleware: sveltekit(),
	getUserAttributes: (databaseUser) => {
		return {
			first_name: databaseUser.first_name,
			last_name: databaseUser.last_name,
			email: databaseUser.email
		};
	}
});
