<script lang="ts">
  interface IPost {
    body: string;
    date: string;
    summary: string;
    title: string;
  }

  interface IData {
    post: IPost;
  }

  export let data: IData;
  let post = data.post;

  import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
  import { Marked } from "@ts-stack/markdown";
  import hljs from "highlight.js/lib/core";
  import javascript from "highlight.js/lib/languages/javascript";
  import python from "highlight.js/lib/languages/python";
  import shell from "highlight.js/lib/languages/shell";
  import sql from "highlight.js/lib/languages/sql";
  import hljs_svelte from "$lib/highlightjs-svelte";
  import { onMount } from "svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";

  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("python", python);
  hljs.registerLanguage("shell", shell);
  hljs.registerLanguage("sql", sql);
  hljs.registerLanguage("svelte", hljs_svelte);

  Marked.setOptions({
    highlight: (code, language) => {
      if (language) {
        return hljs.highlight(code, { language }).value;
      } else {
        return code;
      }
    },
  });

  const body = Marked.parse(post.body);

  let canShare = false;

  onMount(() => {
    canShare = !!window.navigator.share;
  });

  const shareClick = () => {
    window.navigator.share({
      title: post.title,
      text: post.summary,
      url: document.location.href,
    });
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="/static/css/solarized-light.css" />
  <title>{post.title}</title>
  <meta name="description" content={post.summary} />
</svelte:head>

<article class="blog-post px-3 py-5 p-md-5">
  <div class="container single-col-max-width">
    <div class="row">
      <div class="col-10">
        <header class="blog-post-header">
          <h2 class="title mb-2">{post.title}</h2>
          <div class="meta mb-3"><span class="date">{post.date}</span></div>
        </header>
      </div>
      <div class="col-2">
        <button
          on:click={shareClick}
          class="btn btn-secondary"
          class:d-none={!canShare}
        >
          <Icon data={faShareAlt} />
          <span class="d-none d-md-inline-block">Share</span>
        </button>
      </div>
    </div>

    <div class="blog-post-body">
      {@html body}
    </div>
  </div>
</article>
