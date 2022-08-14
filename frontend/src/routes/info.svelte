<script context="module">
  export const prerender = true;
</script>

<svelte:head>
  <title>Information about me | PGJones</title>
  <meta name="description" content="Information about me and this site." />
</svelte:head>

<section class="about-me-section p-3 p-lg-5 theme-bg-light">
  <div class="container">
    <div class="profile-teaser media flex-column flex-lg-row">
      <div class="media-body">
        <h2 class="name font-weight-bold mb-1">Phil Jones</h2>
        <div class="tagline mb-3">CTO Brickvest</div>
        <p class="bio mb-4">
          I am a software engineer based in London and the CTO of{" "}
          <a href="https://brickvest.com">Brickvest</a>. I initially studied
          Physics at the University of Oxford, where I undertook my
          undergraduate studies before completing a DPhil in particle physics
          2011. After a period of postdoctoral study at Queen Mary’s University
          of London I switched to industry, securing roles as Head of
          Engineering at{" "}
          <a href="https://octopuswealth.com/">Octopus Wealth</a>
          and VP Engineering at
          <a href="https://smarkets.com/">Smarkets</a>.
        </p>
        <p>
          At present I contribute to open source in Python on projects relating
          to web development, including most notably the HTTP stack. I also have
          experience managing large industry tech and write Python, Typescript
          and Terraform.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="overview-section p-3 p-lg-5">
  <div class="container">
    <h2 class="section-title font-weight-bold mb-3">This website</h2>
    <p class="section-intro mb-5">
      This site is{" "}
      <a href="https://github.com/pgjones/pgjones_dev">open source</a>
      with the frontend written in Typescript using the Svelte framework and the
      backend written in Python using the Quart framework.
    </p>
    <p>
      This site primarily exists as a place for me to blog about things with
      links to projects I work on.
    </p>
  </div>
</section>
