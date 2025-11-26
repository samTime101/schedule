
<script lang="ts">
	let { groups, defaultGroup } = $props();
	let selectedGroup = $state(defaultGroup);
	let schedule = $derived(groups[selectedGroup].SCHEDULE);
	const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
	let selectedDay = $state(days[new Date().getDay()]);
</script>

<div class="w-full flex justify-center p-4 md:p-6">
	<div class="w-full max-w-4xl space-y-4 md:space-y-6">

		<!-- TOP CONTROL BAR -->
		<div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-md 
		            border border-gray-200/40 dark:border-gray-700/40 
		            rounded-xl p-3 flex flex-col md:flex-row md:items-center 
		            gap-3 md:justify-between">
			<!-- GROUP DROPDOWN -->
			<select
				bind:value={selectedGroup}
				class="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg 
				       border border-gray-300 dark:border-gray-600 
				       text-gray-700 dark:text-gray-300 text-sm md:text-base
				       focus:ring-2 focus:ring-blue-500 outline-none transition"
			>
				{#each Object.keys(groups) as g}
					<option value={g}>{g}</option>
				{/each}
			</select>

			<!-- DAY TABS -->
			<div class="flex gap-2 overflow-x-auto">
				{#each days as day}
					<button
						onclick={() => (selectedDay = day)}
						class="px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all whitespace-nowrap
							{selectedDay === day
								? 'bg-blue-600 text-white shadow-md'
								: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}"
					>
						{day}
					</button>
				{/each}
			</div>
		</div>

		<!-- CONTENT SECTION -->
		<div class="mt-2">

			{#if schedule[selectedDay].length === 0}
				<!-- EMPTY DAY -->
				<p class="text-gray-500 dark:text-gray-400 italic text-center py-10 text-base md:text-lg">
					No classes today.
				</p>

			{:else}

				<!-- MOBILE: stacked card layout -->
				<div class="flex flex-col gap-4 md:hidden">
					{#each schedule[selectedDay] as session}
						<div class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200/40 dark:border-gray-700/40">
							<div class="flex justify-between items-center mb-2">
								<h3 class="font-semibold text-gray-900 dark:text-gray-100 text-base md:text-lg">{session.MODULE}</h3>
								<span class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
									{session.START} - {session.END}
								</span>
							</div>
							<div class="text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-1">
								<p><span class="font-medium">Instructor:</span> {session.TEACHER}</p>
								<p><span class="font-medium">Location:</span> {session.VENUE}</p>
							</div>
						</div>
					{/each}
				</div>

				<!-- DESKTOP: table with better visual hierarchy -->
				<div class="hidden md:block mt-4 overflow-hidden rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
					<table class="w-full text-sm md:text-base border-collapse">
						<thead class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
							<tr>
								<th class="p-4 text-left font-semibold">Time</th>
								<th class="p-4 text-left font-semibold">Subject</th>
								<th class="p-4 text-left font-semibold">Instructor</th>
								<th class="p-4 text-left font-semibold">Location</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-100 dark:divide-gray-700">
							{#each schedule[selectedDay] as session, i}
								<tr class="hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition">
									<td class="p-4 text-gray-700 dark:text-gray-300">{session.START} - {session.END}</td>
									<td class="p-4 font-medium text-gray-900 dark:text-gray-100">{session.MODULE}</td>
									<td class="p-4 text-gray-700 dark:text-gray-300">{session.TEACHER}</td>
									<td class="p-4 text-gray-700 dark:text-gray-300">{session.VENUE}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

			{/if}

		</div>
	</div>
</div>
