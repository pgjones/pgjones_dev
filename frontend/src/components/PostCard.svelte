<script lang="typescript">
  export let date: string;
  export let slug: string;
  export let summary: string;
  export let title: string;
</script>

<div class="col-md-6 mb-3">
  <div class="card blog-post-card">
    <div class="card-body">
      <h5 class="card-title">
        <a href="/blog/{slug}/" class="theme-link">{title}</a>
      </h5>
      <p class="card-text">{summary}</p>
      <p class="mb-0">
        <a href="/blog/{slug}/" class="theme-link">Read more →</a>
      </p>
    </div>
    <div class="card-footer"><small class="text-muted">{date}</small></div>
  </div>
</div>
