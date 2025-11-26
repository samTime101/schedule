<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	// Theme state
	let theme = 'light';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
		}
		applyTheme(theme);
	});

	function applyTheme(newTheme: string) {
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		localStorage.setItem('theme', newTheme);
	}

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		applyTheme(theme);
	}

	// Changelog/Home toggle
	function togglePage() {
		const path = get(page).url.pathname;
		if (path === '/changelog') {
			goto('/');
		} else {
			goto('/changelog');
		}
	}
</script>

<!-- Navbar container -->
<div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">

	<!-- Changelog/Home button -->
	<button
		on:click={togglePage}
		class="p-3 bg-white dark:bg-gray-800 rounded-full
			   shadow-lg border border-gray-200 dark:border-gray-700
			   hover:shadow-xl active:scale-95 transition-all duration-200
			   focus:ring-2 focus:ring-blue-500 focus:outline-none"
		aria-label="Toggle Changelog/Home"
	>
		{#if $page.url.pathname === '/'}
			<!-- Right arrow -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				fill="none" stroke="currentColor"
				class="h-5 w-5 text-gray-700 dark:text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
				stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M5 12h14" />
				<path d="M13 6l6 6-6 6" />
			</svg>
		{:else}
			<!-- Left arrow -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				fill="none" stroke="currentColor"
				class="h-5 w-5 text-gray-700 dark:text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
				stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M19 12H5" />
				<path d="M11 18l-6-6 6-6" />
			</svg>
		{/if}
	</button>

	<!-- Theme toggle button -->
	<button
		on:click={toggleTheme}
		class="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		aria-label="Toggle theme"
	>
		{#if theme === 'light'}
			<!-- Moon icon -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
			</svg>
		{:else}
			<!-- Sun icon -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
			</svg>
		{/if}
	</button>
</div>
