<script lang="typescript">
  import Project from "../components/Project.svelte";
</script>

<svelte:head>
  <title>Open source | PGJones</title>
  <meta
    name="description"
    content="The open source projects I help maintain." />
</svelte:head>

<section class="cta-section theme-bg-light py-5">
  <div class="container text-center single-col-max-width">
    <h2 class="heading">Open Source</h2>
    <p class="intro">
      These are the open source projects that I am involved with, either as the
      author or as a maintainer.
    </p>
  </div>
</section>

<section class="projects-list px-3 py-5 p-md-5">
  <div class="container">
    <div class="project-cards row isotope">

      <Project
        name="Quart"
        imgSrc="/static/media/Quart.png"
        sourceHref="https://gitlab.com/pgjones/quart"
        docsHref="https://pgjones.gitlab.io/quart/">
        Quart is a Python ASGI web microframework, that allows websites to be
        written utilising the async await syntax and the familiar Flask API.
        This is possible as Quart is a re-implementation of the Flask API using
        async/await and ASGI.
      </Project>

      <Project
        name="Hypercorn"
        imgSrc="/static/media/Hypercorn.png"
        sourceHref="https://gitlab.com/pgjones/hypercorn"
        docsHref="https://pgjones.gitlab.io/hypercorn/">
        Hypercorn is a Python ASGI server, capable of serving HTTP/1, HTTP/2,
        and HTTP/3 requests and WebSockets over both HTTP/1, HTTP/2 and HTTP/3.
        In addition it supports asyncio and Trio event loop workers.
      </Project>

      <Project
        name="Quart-Trio"
        sourceHref="https://gitlab.com/pgjones/quart-trio">
        Quart-Trio is a Quart extension that supports the
        <a href="https://trio.readthedocs.io/en/stable/">Trio</a>
        {' '} event loop (rather than asyncio).
      </Project>

      <Project
        name="Quart-Cors"
        sourceHref="https://gitlab.com/pgjones/quart-cors">
        Quart-CORS is a Quart extension that adds relevant Cross Origin Resource
        Sharing headers.
      </Project>

      <Project
        name="Quart-Rate-Limiter"
        sourceHref="https://gitlab.com/pgjones/quart-rate-limiter">
        Quart-Rate-Limiter is an extension for Quart to allow for rate limits to
        be defined and enforced on a per route basis. It is interesting in that
        it utilises the GCRA, rather than a leaky bucket approach.
      </Project>

      <Project
        name="Quart-Auth"
        sourceHref="https://gitlab.com/pgjones/quart-auth"
        docsHref="https://pgjones.gitlab.io/quart-auth/">
        Quart-Auth is an extension for Quart to provide for secure cookie
        authentication (session management). It allows for a session to be
        logged in, authenticated and logged out.
      </Project>

      <Project
        name="h2"
        sourceHref="https://github.com/python-hyper/hyper-h2"
        role="MAINTAINER">
        h2 is a Sans-IO implementation of the HTTP/2 protocol.
      </Project>

      <Project
        name="wsproto"
        sourceHref="https://github.com/python-hyper/wsproto"
        role="MAINTAINER">
        wsproto is a Sans-IO implementation of the WebSocket protocol. It
        supports both HTTP/1 and HTTP/2 WebSockets.
      </Project>

      <Project
        name="Werkzeug"
        sourceHref="https://github.com/pallets/werkzeug"
        role="MAINTAINER">
        Werkzeug is a comprehensive WSGI web application library, my effort is
        to make it a ASGI web application library as well.
      </Project>

    </div>
  </div>
</section>
