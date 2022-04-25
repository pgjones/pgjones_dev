<script lang="ts">
  import {
    faUser,
    faLaptopCode,
    faBlog,
    faChalkboard,
    faPlay,
    faBook,
  } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";

  import Github from "$lib/Github.svelte";
  import Gitlab from "$lib/Gitlab.svelte";
  import Stackoverflow from "$lib/Stackoverflow.svelte";
  import Twitter from "$lib/Twitter.svelte";

  export let page: any;
  export let section: string;

  let expand = false;

  page.subscribe(() => {
    expand = false;
  });

  const onClick = () => {
    expand = !expand;
  };
</script>

<header class="header text-center">
  <div class="force-overflow">
    <h1 class="blog-name pt-lg-4 mb-0"><a href="/">P G Jones</a></h1>

    <nav class="navbar navbar-expand-lg navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="#navigation"
        aria-expanded={expand}
        aria-label="Toggle navigation"
        on:click={onClick}
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div
        class="collapse navbar-collapse flex-column"
        class:show={expand}
        id="navigation"
      >
        <div class="profile-section pt-3 pt-lg-0">
          <picture>
            <source
              class="profile-image mb-3 rounded mx-auto"
              srcset="/static/media/MeSudbury.webp"
              type="image/webp"
              alt="My avatar"
            />
            <img
              class="profile-image mb-3 rounded mx-auto"
              height="160"
              src="/static/media/MeSudbury.jpeg"
              type="image/jpeg"
              width="160"
              alt="My avatar"
            />
          </picture>

          <div class="bio mb-3">
            Hi, my name is Philip Jones. Welcome to my personal website!
          </div>
          <ul class="social-list list-inline py-2 mx-auto">
            <li class="list-inline-item">
              <a href="https://github.com/pgjones">
                <Github />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://gitlab.com/pgjones">
                <Gitlab />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://twitter.com/pdgjones">
                <Twitter />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://stackoverflow.com/users/9231401/pgjones">
                <Stackoverflow />
              </a>
            </li>
          </ul>

          <hr />
        </div>

        <ul class="navbar-nav flex-column text-left">
          <li class:active={section === "info"} class="nav-item">
            <a href="/info/" class="nav-link">
              <Icon data={faUser} />
              About Me
            </a>
          </li>
          <li class:active={section === ""} class="nav-item">
            <a href="/" class="nav-link">
              <Icon data={faLaptopCode} />
              Open Source
            </a>
          </li>
          <li class:active={section === "blog"} class="nav-item">
            <a href="/blog/" class="nav-link">
              <Icon data={faBlog} />
              Blog
            </a>
          </li>
          <li class:active={section === "talks"} class="nav-item">
            <a href="/talks/" class="nav-link">
              <Icon data={faChalkboard} />
              Talks
            </a>
          </li>
          <li class:active={section === "tutorials"} class="nav-item">
            <a href="/tutorials/" class="nav-link">
              <Icon data={faPlay} />
              Tutorials
            </a>
          </li>
          <li class="nav-item">
            <a href="/tozo/" class="nav-link" rel="external">
              <Icon data={faBook} />
              Zero to production web apps - book
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
