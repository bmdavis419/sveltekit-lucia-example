<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	export let data;
</script>

<div class="grow flex flex-col items-center justify-center gap-y-4">
	<h4 class="text-xl font-bold">hello: {data.email}</h4>

	<div class="flex flex-row items-center gap-x-3">
		<Button href="/auth/logout">logout</Button>
		<Button
			on:click={() => {
				fetch('/profile', {
					method: 'DELETE'
				}).then(() => {
					goto('/');
				});
			}}
			variant="destructive">delete account</Button
		>
	</div>
</div>
