<script lang="typescript">
  export let docsHref: string | undefined = undefined;
  export let imgSrc: string | undefined = undefined;
  export let name: string;
  export let role: "AUTHOR" | "MAINTAINER" = "AUTHOR";
  export let sourceHref: string;
</script>

<div
  class:col-md-6={imgSrc !== undefined}
  class:col-md-4={imgSrc === undefined}
  class="isotope-item col-md-6 mb-5 mobileapp frontend">
  <div class="card project-card">
    <div class="row no-gutters">
      {#if imgSrc !== undefined}
        <div class="card-img-holder">
          <picture>
            <source
              height="100"
              srcset="{imgSrc}.webp"
              type="image/webp"
              width="100"
              class="card-img"
              alt={name} />
            <img
              height="100"
              src="{imgSrc}.png"
              type="image/png"
              width="100"
              class="card-img"
              alt={name} />
          </picture>
        </div>
      {/if}
      <div class="card-body">
        <h3 class="card-title">
          <a href={sourceHref} class="theme-link"> {name} </a>
        </h3>
        <p class="card-text card-main">
          <slot />
        </p>
        <p class="card-text">
          <a href={sourceHref}>Source code</a>
          {#if docsHref !== undefined}
            and
            <a href={docsHref}>Documentation</a>
          {/if}
        </p>
        <p class="card-text">
          <small class="text-muted">
            {#if role === 'AUTHOR'}
              I am the author of this project
            {:else}I am a maintainer of this project{/if}
          </small>
        </p>
      </div>
    </div>
  </div>
</div>
