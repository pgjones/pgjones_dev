<script context="module" lang="typescript">
  import { faRssSquare } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";

  import PostCard from "../../components/PostCard.svelte";

  export async function preload({ params, query }) {
    const response = await this.fetch("/v0/blogs/");
    const data = await response.json();
    return data;
  }
</script>

<script lang="typescript">
  export let posts;
</script>

<svelte:head>
  <title>Blog posts | PGJones</title>
  <meta name="description" content="My blog posts." />
</svelte:head>

<section class="cta-section theme-bg-light py-5">
  <div class="container text-center">
    <h2 class="heading">A Blog About Software Development</h2>
    <div class="intro mb-4">Welcome to my blog.</div>
    <a
      href="https://pgjones.dev/blog/atom.xml"
      type="submit"
      class="btn btn-primary mr-2">
      <Icon data={faRssSquare} />
      Atom Feed
    </a>
    <a
      href="https://pgjones.dev/blog/rss20.xml"
      type="submit"
      class="btn btn-primary">
      <Icon data={faRssSquare} />
      RSS Feed
    </a>
  </div>
</section>

<section class="blog-list px-3 py-5 p-md-5">
  <div class="container">
    <div class="row">

      {#each posts as post}
        <PostCard
          date={post.date}
          slug={post.id}
          summary={post.summary}
          title={post.title} />
      {/each}

      <div class="col-md-6 mb-3">
        <div class="card blog-post-card">
          <div class="card-body">
            <h5 class="card-title">
              <a class="theme-link" href="https://medium.com/@pgjones">
                Medium blog
              </a>
            </h5>
            <p class="card-text">
              Before I made this site I blogged on medium.com under the handle
              @pgjones. I still do for articles that are related to my
              employment.
            </p>
            <p class="mb-0">
              <a class="more-link" href="https://medium.com/@pgjones">
                Read more →
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="card blog-post-card">
          <div class="card-body">
            <h5 class="card-title">
              <a class="theme-link" href="https://stet.io/blog">Stet.io blog</a>
            </h5>
            <p class="card-text">
              Stet.io is an online image editor I developed, it also had a blog
              about it and image processing techniques.
            </p>
            <p class="mb-0">
              <a class="more-link" href="https://stet.io/blog">Read more →</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
