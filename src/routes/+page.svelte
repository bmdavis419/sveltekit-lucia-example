<script>
	import { Button } from '$lib/components/ui/button';

	export let data;
</script>

<div class="grow flex items-center justify-center flex-col gap-y-16">
	<h3 class="text-6xl font-bold">
		Welcome to This Very <span class="text-orange-600">Mid</span> Demo
	</h3>
	{#if !data.loggedIn}
		<Button class="bg-orange-600 text-white text-xl p-6" href="/auth/signup"
			>Sign Up or Login</Button
		>
	{/if}
</div>
