<script lang="ts">
  import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";

  let canShare = false;

  onMount(() => {
    canShare = !!window.navigator.share;
  });

  const shareClick = () => {
    window.navigator.share({
      title: "A Blueprint for Production-Ready Web Applications",
      text: "Leverage industry best practices to create complete web apps with Python, TypeScript, and AWS",
      url: document.location.href,
    });
  };
</script>

<svelte:head>
  <title>My book | PGJones</title>
  <meta
    name="description"
    content="My book - A Blueprint for Production-Ready Web Applications"
  />
</svelte:head>

<section class="about-me-section p-3 p-lg-5 theme-bg-light">
  <div class="container">
    <div class="profile-teaser media flex-column flex-lg-row">
      <div class="media-body">
        <div class="row">
          <div class="col-md-9">
            <h2 class="name font-weight-bold mb-1">
              A Blueprint for Production-Ready Web Applications
            </h2>
            <div class="tagline mb-3">
              Leverage industry best practices to create complete web apps with
              Python, TypeScript, and AWS
            </div>
          </div>
          <div class="d-none d-md-block col-md-3">
            <img class="w-100" alt="The book cover" src="/static/Cover.jpg" />
          </div>
        </div>
        <p>
          <a
            class="btn btn-primary"
            href="https://www.packtpub.com/product/blueprint-for-production-ready-web-development/9781803248509"
            rel="external">Read book</a
          >
          <a
            class="btn btn-secondary"
            href="https://github.com/pgjones/tozo"
            rel="external">View code</a
          >
          <a class="btn btn-secondary" href="https://tozo.dev" rel="external"
            >View app</a
          >
          <button
            on:click={shareClick}
            class="btn btn-secondary"
            class:d-none={!canShare}
          >
            <Icon data={faShareAlt} />
            <span class="d-none d-md-inline-block">Share</span>
          </button>
        </p>
        <p class="bio mb-4">
          A Blueprint for Production-Ready Web Applications will help you expand
          upon your coding knowledge and teach you how to create a complete web
          application. Unlike other guides that focus solely on a singular
          technology or process, this book shows you how to combine different
          technologies and processes as needed to meet industry standards.
        </p>
        <p>
          You’ll begin by learning how to set up your development environment,
          and use Quart and React to create the backend and frontend,
          respectively. This book then helps you get to grips with managing and
          validating accounts, structuring relational tables, and creating forms
          to manage data. As you progress through the chapters, you’ll gain a
          comprehensive understanding of web application development by creating
          a to-do app, which can be used as a base for your future projects.
          Finally, you’ll find out how to deploy and monitor your application,
          along with discovering advanced concepts such as managing database
          migrations and adding multifactor authentication.
        </p>
        <p>
          By the end of this web development book, you’ll be able to apply the
          lessons and industry best practices that you’ve learned to both your
          personal and work projects, allowing you to further develop your
          coding portfolio.
        </p>
      </div>
    </div>
  </div>
</section>
