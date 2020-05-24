<script>
  import { stores } from "@sapper/app";

  import Nav from "../components/Nav.svelte";

  export let segment;

  const { page } = stores();
</script>

<Nav {page} {segment} />

<main class="main-wrapper">
  <slot />
</main>
