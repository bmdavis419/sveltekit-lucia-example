import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/auth/signup');
	return {
		userId: session.user.userId as string,
		email: session.user.email as string
	};
};
