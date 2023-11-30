import { auth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';

export const DELETE = async ({ locals }) => {
	// delete the user's account
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/auth/signup');

	console.log(session);

	await auth.deleteUser(session.user.userId);

	return new Response(String('Success'));
};
