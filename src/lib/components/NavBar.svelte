<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';

	export let loggedIn: boolean;
</script>

<nav class="w-full flex flex-row justify-between items-center p-7">
	<a href="/">
		<h2 class="text-3xl font-bold">Auth Example</h2>
	</a>

	<div class="flex flex-row gap-x-4 items-center">
		{#if loggedIn}
			<Button variant="link" href="/profile">My Profile</Button>
			<Button variant="link" href="/auth/logout">Logout</Button>
		{:else}
			<Button variant="link" href="/auth/login">Login/Signup</Button>
		{/if}

		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</nav>
