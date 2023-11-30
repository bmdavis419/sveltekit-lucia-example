<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Mail } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		console.log(data);
	});
</script>

<div class="w-full h-screen flex items-center justify-center">
	<Card.Root class="w-[400px]">
		<Card.Header>
			<Card.Title>Example Signup</Card.Title>
			<Card.Description>Showcasing how to use the signup in SvelteKit with Lucia</Card.Description>
		</Card.Header>
		<Card.Content>
			<form class="flex flex-col gap-y-4" method="POST">
				<div class="flex flex-col w-full gap-1.5">
					<Label for="email">email</Label>
					<Input type="email" id="email" placeholder="email" name="email" required />
				</div>

				<div class="flex flex-col w-full gap-1.5">
					<Label for="firstName">first name</Label>
					<Input type="text" id="firstName" placeholder="first name" name="firstName" />
				</div>

				<div class="flex flex-col w-full gap-1.5">
					<Label for="lastName">last name</Label>
					<Input type="text" id="lastName" placeholder="last name" name="lastName" />
				</div>

				<div class="flex flex-col w-full gap-1.5">
					<Label for="password">password</Label>
					<Input type="password" id="password" placeholder="password" name="password" required />
				</div>

				<div class="flex flex-row justify-center items-center w-full gap-1.5">
					<Button type="submit">
						<Mail class="mr-2 h-4 w-4" />
						Sign Up with Email
					</Button>
				</div>
			</form>
		</Card.Content>
	</Card.Root>
</div>
