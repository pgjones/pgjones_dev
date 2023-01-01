<script lang="ts">
  import TutorialCard from "$lib/TutorialCard.svelte";
</script>

<svelte:head>
  <title>Tutorials | PGJones</title>
  <meta name="description" content="Coding tutorials." />
</svelte:head>

<section class="cta-section theme-bg-light py-5">
  <div class="container text-center">
    <h2 class="heading">Coding tutorials</h2>
    <div class="intro mb-4">These are my tutorials.</div>
  </div>
</section>

<section class="blog-list px-3 py-5 p-md-5">
  <div class="container">
    <div class="row">
      <TutorialCard
        title="How to Authenticate with Quart, and Quart-Auth"
        video="https://www.youtube-nocookie.com/embed/l72qqAgTqyQ"
      />
      <TutorialCard
        title="How to build a RESTful API with Quart, Quart-DB & Quart-Schema"
        video="https://www.youtube-nocookie.com/embed/LyEh4AwHdDM"
      />
    </div>
  </div>
</section>
