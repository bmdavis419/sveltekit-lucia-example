import { auth } from '$lib/server/auth';
import { db } from '$lib/server/db/index.js';
import { user } from '$lib/server/db/schema.js';
import { error, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		const schema = zfd.formData({
			// matched to the name field in the form
			firstName: zfd.text(),
			lastName: zfd.text(),
			email: zfd.text(),
			password: zfd.text()
		});

		const res = await schema.safeParseAsync(data);

		if (!res.success) {
			throw error(400, { message: 'missing 1 or more required fields...' });
		}

		const user = await auth.createUser({
			key: {
				providerId: 'email',
				providerUserId: res.data.email,
				password: 'asdf1234'
			},
			attributes: {
				first_name: res.data.firstName,
				last_name: res.data.lastName,
				email: res.data.email
			}
		});

		// generate a session for the user
		const session = await auth.createSession({
			userId: user.userId,
			attributes: {}
		});
		locals.auth.setSession(session); // set session cookie

		throw redirect(307, '/profile');
	}
};

export const load = async () => {
	const res = await db.select().from(user);

	return { users: res };
};
