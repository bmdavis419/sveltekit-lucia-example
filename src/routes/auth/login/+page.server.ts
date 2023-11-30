import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { zfd } from 'zod-form-data';

export const load = async ({ locals }) => {
	// ensure that the user is logged in
	const session = await locals.auth.validate();
	if (session) throw redirect(307, '/profile');

	return;
};

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();

		const schema = zfd.formData({
			// matched to the name field in the form
			email: zfd.text(),
			password: zfd.text()
		});

		const res = await schema.safeParseAsync(data);

		if (!res.success) {
			return fail(400, { message: 'missing 1 or more required fields...' });
		}

		try {
			const key = await auth.useKey('email', res.data.email, res.data.password);

			// generate a session for the user
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === 'AUTH_INVALID_KEY_ID' || e.message === 'AUTH_INVALID_PASSWORD')
			) {
				// user does not exist
				// or invalid password
				return fail(400, {
					message: 'Incorrect email or password'
				});
			}
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}

		throw redirect(302, '/profile');
	}
};
