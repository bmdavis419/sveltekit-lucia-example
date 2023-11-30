<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from './ui/button';
</script>

<footer class="w-full flex flex-row items-center justify-center gap-x-3 py-4">
	<Button href="https://twitter.com/bmdavis419" target="_blank" variant="link">by Ben Davis</Button>
	<Separator orientation="vertical" />
	<Button
		href="https://github.com/bmdavis419/sveltekit-lucia-example"
		target="_blank"
		variant="link">project repo</Button
	>
</footer>
