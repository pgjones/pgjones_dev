<script lang="ts">
  export let title: string;
  export let video: string;
</script>

<div class="col-md-6 mb-3">
  <div class="card blog-post-card">
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        frameborder="0"
        src={video}
        {title}
      />
    </div>
  </div>
</div>

<style>
  iframe {
    width: 100%;
    min-height: 300px;
  }
</style>
