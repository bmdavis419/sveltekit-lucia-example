import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		const schema = zfd.formData({
			// matched to the name field in the form
			firstName: zfd.text(),
			lastName: zfd.text(),
			email: zfd.text(),
			password: zfd.text(),
			confirmPassword: zfd.text()
		});

		const res = await schema.safeParseAsync(data);

		if (!res.success) {
			return fail(400, { message: 'missing 1 or more required fields...' });
		}

		if (res.data.password !== res.data.confirmPassword) {
			return fail(400, { message: 'passwords do not match...' });
		}

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'email',
					providerUserId: res.data.email,
					password: res.data.password
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
		} catch (e) {
			return fail(400, {
				message: 'Username already taken'
			});
		}
		throw redirect(302, '/profile');
	}
};

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/profile');

	return;
};
