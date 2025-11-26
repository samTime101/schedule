<script lang="ts">
	import { groups } from '$lib/schedule';
	import { changelog, upcoming } from '$lib/changelog';
	import Schedule from './components/Schedule.svelte';
	import Footer from './components/Footer.svelte';
	import Changelog from './components/Changelog.svelte';
</script>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
	<!-- changelog -->
	<div
		class="p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-center"
	>
		<strong>Note:</strong> Check out the
		<a
			href="/changelog"
			class="underline font-semibold hover:text-yellow-900 dark:hover:text-yellow-100">Changelog</a
		> for the latest updates and upcoming features!
	</div>
	<div class="flex-grow">
		<Schedule {groups} defaultGroup="L5CG4" />
	</div>
	<!-- <Changelog changelog={changelog} upcoming={upcoming} /> -->
	<Footer />
</div>
