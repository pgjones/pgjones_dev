<script lang="ts">
  import { page } from "$app/stores";

  import Nav from "$lib/Nav.svelte";

  $: section = $page.path.split("/")[1];
</script>

<Nav {page} {section} />

<main class="main-wrapper">
  <slot />
</main>
