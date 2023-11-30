<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<ModeWatcher />

<div class="min-h-screen flex flex-col justify-between w-screen">
	<NavBar loggedIn={data.loggedIn} />
	<slot />
	<Footer />
</div>
