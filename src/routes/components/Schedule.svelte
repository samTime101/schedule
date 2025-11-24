<script lang="ts">
    let { groups, defaultGroup } = $props();
	let selectedGroup = $state(defaultGroup);
	let schedule = $derived(groups[selectedGroup].SCHEDULE);
	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI"];

	let selectedDay = $state(days[new Date().getDay()]);
</script>

<div class="w-full flex justify-center p-6">
	<div class="w-full max-w-4xl">

		<!-- <h1 class="text-4xl font-semibold mb-10 tracking-tight text-gray-900 text-center">
			Schedule
		</h1> -->

		<!-- GROUP SELECTOR -->
		<div class="flex justify-center mb-10">
			<div class="flex items-center gap-3 bg-white px-6 py-3 shadow-sm rounded-2xl border border-gray-200">
				<label class="font-medium text-gray-700 whitespace-nowrap">Select Group:</label>

				<select
					bind:value={selectedGroup}
					class="px-4 py-2 bg-gray-50 rounded-xl border border-gray-300 shadow-sm
						   focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-gray-700"
				>
					{#each Object.keys(groups) as g}
						<option value={g}>{g}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- DAY TABS -->
		<div class="w-full flex justify-center">
			<div class="flex gap-2 bg-white p-3 rounded-2xl shadow-sm border border-gray-200 max-w-full overflow-x-auto">
				{#each days as day}
					<button
						onclick={() => selectedDay = day}
						class="
							px-6 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap hover:shadow-md cursor-pointer
							{selectedDay === day
								? 'bg-gray-900 text-white shadow'
								: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
						"
					>
						{day}
					</button>
				{/each}
			</div>
		</div>

		<!-- SELECTED DAY CONTENT -->
		<div class="mt-10 bg-white rounded-3xl shadow-lg border border-gray-200 p-6">
			<h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">
				{selectedDay} Schedule
			</h2>

			{#if schedule[selectedDay].length === 0}
				<p class="text-gray-500 italic text-center text-lg">No classes today.</p>

			{:else}
				<div class="overflow-x-auto rounded-2xl">
					<table class="w-full text-sm">
						<thead>
							<tr class="text-gray-600 text-left border-b border-gray-200">
								<th class="p-4 font-medium">Time</th>
								<th class="p-4 font-medium">Subject</th>
								<th class="p-4 font-medium">Instructor</th>
								<th class="p-4 font-medium">Location</th>
							</tr>
						</thead>

						<tbody>
							{#each schedule[selectedDay] as session, i}
								<tr class="{i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition cursor-pointer">
									<td class="p-4">{session.START} - {session.END}</td>
									<td class="p-4 font-medium text-gray-900">{session.MODULE}</td>
									<td class="p-4 text-gray-700">{session.TEACHER}</td>
									<td class="p-4 text-gray-700">{session.VENUE}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	</div>
</div>
