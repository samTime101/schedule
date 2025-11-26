<script>
	let { children } = $props();
	import '../app.css';
	import ThemeSwitcher from './components/ThemeSwitcher.svelte';
</script>

<ThemeSwitcher />
{@render children()}
