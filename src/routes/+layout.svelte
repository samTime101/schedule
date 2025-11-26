<script>
	let { children } = $props();
	import '../app.css';
	import ThemeSwitcher from './components/ThemeSwitcher.svelte';
	import ChangelogRedirect from './components/ChangelogRedirect.svelte';
</script>
	
<ThemeSwitcher />
<ChangelogRedirect />
{@render children()}
