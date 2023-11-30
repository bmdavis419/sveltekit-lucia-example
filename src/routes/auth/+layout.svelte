<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Mail } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import vectorBgrnd from '$lib/assets/login-vector.jpg';
</script>

<div class="grow grid grid-cols-5">
	<div class="h-full col-span-3 p-8">
		<img src={vectorBgrnd} class="w-full h-full rounded-md" alt="background" />
	</div>

	<div class="flex items-center justify-center grow col-span-2">
		<slot />
	</div>
</div>
