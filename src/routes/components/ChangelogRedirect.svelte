<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	function onclick() {
		const path = get(page).url.pathname;
		if (path === '/changelog') {
			goto('/');
		} else {
			goto('/changelog');
		}
	}
</script>

<button
	on:click={onclick}
	class="fixed top-4 right-18 z-50 p-3 bg-white dark:bg-gray-800 rounded-full
		   shadow-lg border border-gray-200 dark:border-gray-700
		   hover:shadow-xl active:scale-95 transition-all duration-200
		   focus:ring-2 focus:ring-blue-500 focus:outline-none"
	aria-label="Toggle Changelog"
>
	{#if $page.url.pathname === '/'}
		<!-- RIGHT ARROW TO GO TO CHANGELOG -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			class="h-5 w-5 text-gray-700 dark:text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M5 12h14" />
			<path d="M13 6l6 6-6 6" />
		</svg>
	{:else}
		<!-- LEFT ARROW TO GO BACK HOME -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			class="h-5 w-5 text-gray-700 dark:text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M19 12H5" />
			<path d="M11 18l-6-6 6-6" />
		</svg>
	{/if}
</button>
