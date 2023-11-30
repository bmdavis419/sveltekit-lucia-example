import { auth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals }) => {
	// clear out the user's sessions
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/profile');
	await auth.invalidateSession(session.sessionId); // invalidate session
	locals.auth.setSession(null); // remove cookie
	throw redirect(302, '/auth/login');
};
