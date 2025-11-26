<script lang="ts">
	let { groups, defaultGroup } = $props();
	let selectedGroup = $state(defaultGroup);
	let schedule = $derived(groups[selectedGroup].SCHEDULE);
	const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];

	let selectedDay = $state(days[new Date().getDay()]);
</script>

<div class="w-full flex justify-center p-4 md:p-6">
	<div class="w-full max-w-4xl">
		<!-- GROUP SELECTOR -->
		<div class="flex justify-center mb-6">
			<div
				class="flex items-center gap-2 md:gap-3 bg-white dark:bg-gray-800 px-4 md:px-6 py-2 md:py-3 shadow-sm rounded-2xl border border-gray-200 dark:border-gray-700"
			>
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label
					class="font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap text-sm md:text-base"
					>Select Group:</label
				>
				<select
					bind:value={selectedGroup}
					class="px-3 py-1 md:px-4 md:py-2 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm
                 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-gray-700 dark:text-gray-300 text-sm md:text-base"
				>
					{#each Object.keys(groups) as g}
						<option value={g}>{g}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- DAY TABS -->
		<div class="w-full overflow-x-auto mb-6">
			<div
				class="flex gap-2 md:gap-3 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 min-w-max md:justify-center"
			>
				{#each days as day}
					<button
						onclick={() => (selectedDay = day)}
						class="
              px-4 md:px-6 py-2 rounded-xl text-sm md:text-base font-medium transition-all whitespace-nowrap hover:shadow-md cursor-pointer
              {selectedDay === day
							? 'bg-gray-900 dark:bg-blue-600 text-white shadow'
							: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}
            "
					>
						{day}
					</button>
				{/each}
			</div>
		</div>

		<!-- SELECTED DAY CONTENT -->
		<div class="mt-4 md:mt-10">
			<h2
				class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 md:mb-6 text-center"
			>
				{selectedDay} Schedule
			</h2>

			{#if schedule[selectedDay].length === 0}
				<p class="text-gray-500 dark:text-gray-400 italic text-center text-base md:text-lg">
					No classes today.
				</p>
			{:else}
				<!-- MOBILE: stacked cards -->
				<div class="flex flex-col gap-4 md:hidden">
					{#each schedule[selectedDay] as session}
						<div
							class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow border border-gray-200 dark:border-gray-700"
						>
							<div class="flex justify-between items-center mb-2">
								<span class="font-medium text-gray-900 dark:text-gray-100">{session.MODULE}</span>
								<span class="text-gray-600 dark:text-gray-400 text-sm"
									>{session.START} - {session.END}</span
								>
							</div>
							<div class="text-gray-700 dark:text-gray-300 text-sm">
								<p><span class="font-medium">Instructor:</span> {session.TEACHER}</p>
								<p><span class="font-medium">Location:</span> {session.VENUE}</p>
							</div>
						</div>
					{/each}
				</div>

				<!-- DESKTOP: table view -->
				<div class="hidden md:block mt-6 overflow-x-auto rounded-2xl">
					<table class="w-full text-sm shadow border border-gray-200 dark:border-gray-700">
						<thead>
							<tr
								class="text-gray-600 dark:text-gray-400 text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
							>
								<th class="p-4 font-medium">Time</th>
								<th class="p-4 font-medium">Subject</th>
								<th class="p-4 font-medium">Instructor</th>
								<th class="p-4 font-medium">Location</th>
							</tr>
						</thead>
						<tbody>
							{#each schedule[selectedDay] as session, i}
								<tr
									class="{i % 2 === 0
										? 'bg-white dark:bg-gray-800'
										: 'bg-gray-50 dark:bg-gray-750'} hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
								>
									<td class="p-4 text-gray-700 dark:text-gray-300"
										>{session.START} - {session.END}</td
									>
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
