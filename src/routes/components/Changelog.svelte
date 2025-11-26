<script lang="ts">
    let { changelog, upcoming } = $props();
</script>

<div class="w-full flex justify-center p-6 bg-white dark:bg-gray-900 min-h-screen">
    <div class="w-full max-w-4xl">

        <!-- <h1 class="text-4xl font-semibold mb-10 tracking-tight text-gray-900 dark:text-gray-100 text-center">
            Changelog
        </h1> -->
        <!-- MOVE BACK TO HOME -->
        <div class="flex justify-center mb-10">
            <a
                href="/"
                class="px-6 py-2.5 bg-gray-900 dark:bg-blue-600 text-white rounded-xl text-sm font-medium shadow hover:shadow-md transition
                       focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >Home
            </a>
        </div>

        <!-- UPCOMING UPDATES -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Upcoming Updates</h2>

            <div class="flex flex-col gap-6">
                {#each Object.entries(upcoming) as [version, info]}
                    <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition cursor-pointer">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Version {version} - {info.date}</h3>
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
                    <div class="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition cursor-pointer">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Version {version} - {info.date}</h3>
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
