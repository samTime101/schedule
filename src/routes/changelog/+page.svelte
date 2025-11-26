<script lang="ts">
	import { changelog, upcoming } from '$lib/changelog';
	import Footer from '../components/Footer.svelte';
	import Changelog from '../components/Changelog.svelte';
</script>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
	<div class="flex-grow">
		<Changelog {changelog} {upcoming} />
	</div>
	<Footer />
</div>
