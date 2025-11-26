<script lang="ts">
	let { changelog, upcoming } = $props();
	import Navbar from "./Navbar.svelte";
</script>

<Navbar />			
<div class="w-full flex justify-center p-6">
	<div class="w-full max-w-4xl">
		<!-- UPCOMING UPDATES -->
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Upcoming Updates</h2>

			<div class="flex flex-col gap-6">
				{#each Object.entries(upcoming) as [version, info]}
					<div
						class="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition cursor-pointer"
					>
						<h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Version {version} - {info.date}
						</h3>
						<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
							{#each info.changes as change}
								<li class="py-1">{change}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<!-- CHANGELOG -->
		<section>
			<h2 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Changelog</h2>

			<div class="flex flex-col gap-6">
				{#each Object.entries(changelog) as [version, info]}
					<div
						class="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition cursor-pointer"
					>
						<h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Version {version} - {info.date}
						</h3>
						<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
							{#each info.changes as change}
								<li class="py-1">{change}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>
