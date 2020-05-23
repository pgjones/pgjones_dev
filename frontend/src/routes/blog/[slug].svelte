<script context="module" lang="typescript">
  export async function preload({ params, query }) {
    const response = await this.fetch(`/v0/blogs/${params.slug}/`);
    const data = await response.json();

    if (response.status === 200) {
      return { post: data };
    } else {
      this.error(response.status, data.message);
    }
  }
</script>

<script lang="typescript">
  export let post;

  import hljs from "highlight.js/lib/core";
  import javascript from "highlight.js/lib/languages/javascript";
  import python from "highlight.js/lib/languages/python";
  import shell from "highlight.js/lib/languages/shell";
  import { Marked } from "@ts-stack/markdown";

  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("python", python);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("shell", shell);

  Marked.setOptions({
    highlight: (code, lang) => hljs.highlight(lang, code).value,
  });

  const body = Marked.parse(post.body);
</script>

<svelte:head>
  <link rel="stylesheet" href="/static/css/solarized-light.css" />
  <title>{post.title}</title>
</svelte:head>

<article class="blog-post px-3 py-5 p-md-5">
  <div class="container single-col-max-width">
    <div class="blog-post-body">
      {@html body}
    </div>
  </div>
</article>
