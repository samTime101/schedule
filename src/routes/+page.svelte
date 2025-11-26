<script lang="ts">
	import { groups } from '$lib/schedule';
	import Schedule from './components/Schedule.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
	<div class="flex-grow">
		<Schedule {groups} defaultGroup="L5CG4" />
	</div>
	<Footer />
</div>
