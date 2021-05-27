<script lang="ts">
  export let event: string;
  export let listenHref: string | undefined = undefined;
  export let slidesHref: string | undefined = undefined;
  export let title: string;
  export let videoHref: string | undefined = undefined;
</script>

<div class="col-md-12 mb-3">
  <div class="card blog-post-card">
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <slot />
      <p class="mb-0">
        {#if videoHref !== undefined}
          <a href={videoHref} class="more-link">Watch →</a>
          <br />
        {/if}
        {#if slidesHref !== undefined}
          <a href={slidesHref} class="more-link">Read Slides →</a>
          <br />
        {/if}
        {#if listenHref !== undefined}
          <a href={listenHref} class="more-link">Listen →</a>
          <br />
        {/if}
      </p>
    </div>
    <div class="card-footer"><small class="text-muted">{event}</small></div>
  </div>
</div>
