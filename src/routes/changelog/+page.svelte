<script lang="ts">
  import { changelog, upcoming } from "$lib/changelog";
  import Footer from "../components/Footer.svelte";
  import Changelog from "../components/Changelog.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <div class="flex-grow">
    <Changelog changelog={changelog} upcoming={upcoming} />
  </div>
  <Footer />
</div>
