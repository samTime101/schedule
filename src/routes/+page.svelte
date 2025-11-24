<script lang="ts">
  import { groups } from "$lib/schedule";
  import Schedule from "./components/Schedule.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <div class="flex-grow">
    <Schedule groups={groups} defaultGroup="L5CG4" />
  </div>
  <Footer />
</div>
