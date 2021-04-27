<script lang="typescript">
  import Talk from "../components/Talk.svelte";
</script>

<svelte:head>
  <title>My public talks | PGJones</title>
  <meta
    name="description"
    content="Talks I have given about software development." />
</svelte:head>

<section class="cta-section theme-bg-light py-5">
  <div class="container text-center">
    <h2 class="heading">My talks About Software Development</h2>
  </div>
</section>

<section class="blog-list px-3 py-5 p-md-5">
  <div class="container">
    <div class="row">
      <Talk
        event="Babylon Health 2021"
        slidesHref="https://docs.google.com/presentation/d/1RbU71pIvAAicZXZT_gTvQJKLcs8g48ewtP8CpHuM3GQ/edit?usp=sharing"
        title="Why isn't Flask async?">
        <p class="card-text">
          The introduction of async/await and asyncio has lead to an explosion
          of new web frameworks bringing many new ideas. Yet the enduring WSGI
          frameworks have been slow, and often unable, to adopt these new
          features - particularly the two most popular frameworks, Django and
          Flask.
        </p>
        <p class="card-text">
          With the recent Django 3.0 supporting async/await, the focus is
          switching to Flask - why isn't Flask async?
        </p>
        <p class="card-text">
          This talk will discuss the approaches taken in the past to support
          async/await in Flask, where they struggled, and the challenges in
          general. It will then show how inspiration has been taken from Django
          to introduce support in the upcoming Flask-2.0 release.
        </p>
      </Talk>

      <Talk
        event="EuroPython 2020"
        slidesHref="https://docs.google.com/presentation/d/1ls0OOa9Qpl6-Z3vwLm5fpApH9utEa6AAsYoxR7mUU_I/edit?usp=sharing"
        title="An ASGI Server from scratch"
        videoHref="https://youtu.be/FNBxYyeti-s">
        <p class="card-text">
          I intend for this to be a fairly advanced talk that shows the steps
          required to go from a TCP echo server to a basic HTTP/1 ASGI server
          using asyncio for the IO. This is aimed at people who've read about
          asyncio, coroutines, etc and want to see them used in practice.
        </p>
        <p class="card-text">
          This is a tutorial on how to build a HTTP/1 ASGI server using asyncio.
          I plan to start by building a TCP echo server and then add HTTP
          parsing and ASGI compliance.
        </p>
      </Talk>

      <Talk
        event="FlaskCon 2020"
        slidesHref="https://docs.google.com/presentation/d/1ZrA5lJ3vg8qoLvJ3ltnoR2UW_6Dkgnw1XpzAK8E53hM/edit?usp=sharing"
        title="Async Flask, an introduction to Quart"
        videoHref="https://www.youtube.com/watch?v=3mIpeeDqKAU&list=PL-MSuSC-Kjb45rrRGL6gWGn6gv35O1mC1">
        <p class="card-text">
          Quart is the Flask API re-implemented in async/await. This talk will
          introduce Quart and explain how it relates to Flask. Then I'll talk
          about potential async support in Flask and discuss the future
          relationship between the Quart and Flask.
        </p>
      </Talk>

      <Talk
        event="London Python 2020"
        slidesHref="https://docs.google.com/presentation/d/1Nm7ojmwtxt-AP5sou6uXwDdCe2KYuy7HtqXI9-Ha9Z4/edit?usp=sharing"
        title="Web development with Trio">
        <p class="card-text">
          The introduction of asyncio to the Python stdlib led to a flurry of
          new web frameworks. Lesser known though are the async/await based
          event loop alternatives to asyncio, curio, and trio. Yet the
          development of asyncio has been and continues to be, heavily
          influenced by these two projects.
        </p>
        <p class="card-text">
          This talk will introduce Trio and motivate why I think it is a great
          choice for web development. I'll talk about the advantages trio brings
          and the ecosystem available to developers. As a practical example I'll
          show my own site (frontend React + backend Quart-Trio).
        </p>
      </Talk>

      <Talk
        event="PyLondinium 2019"
        slidesHref="https://docs.google.com/presentation/d/1lanW471hjyVGk06qi3oGCecJydBVZpYMdaM8bvptIu0/"
        title="An introduction to ASGI, Asynchronous Server Gateway Interface"
        videoHref="https://youtu.be/t3gCK9QqXWU">
        <p class="card-text">
          WSGI has been a huge success, allowing for an ecosystem of servers and
          frameworks to exist and develop independently, however, WSGI is unable
          to support websockets or the new async/await syntax. ASGI is the
          asynchronous spiritual successor to WSGI, with websockets and async
          support built in.
        </p>
      </Talk>

      <Talk
        event="London Python 2019"
        slidesHref="https://docs.google.com/presentation/d/1xoAe5TWfzjt1JsqF5701hYjLaRi3S27M6MHrqGfTKPw/"
        title="Async web servers; design and implementation">
        <p class="card-text">
          In this talk I'll describe an idealised process I've gone through
          developing Hypercorn. I'll define the aims of a modern async web
          server, overview the tooling used to be async, and finally the
          constraints imposed by the event loop choice.
        </p>
      </Talk>

      <Talk
        event="EuroPython 2018"
        slidesHref="https://drive.google.com/open?id=1E6_G_ADuQ8J4t2UVb7rCYmNT700LclzIu7kFGrcndQ8"
        title="Quart; an ASGI alternative to Flask"
        videoHref="https://youtu.be/t8-Y7Kivuu0">
        <p class="card-text">
          Flask is a great web micro-framework, that is best utilised with
          event-loop concurrency. Sadly with Flask the event-loop framework
          can’t be asyncio, although some extensions (Flask-Aiohttp) have tried.
          Quart is the solution as it shares the Flask API and is based on
          asyncio. In addition Quart goes beyond Flask adding HTTP/2 and
          websockets.
        </p>
        <p class="card-text">
          This talk will outline why ASGI is a good asynchronous version of
          WSGI, and then give an overview of Quart, demonstrating features that
          go beyond the Flask framework.
        </p>
      </Talk>

      <Talk
        event="London Python 2018"
        slidesHref="https://docs.google.com/presentation/d/1NVFL-z7_aG2HNGvYpTMBGJOqk6houo13U6ABwfXJ94E"
        title="Quart; a asyncio alternative to Flask"
        videoHref="https://skillsmatter.com/skillscasts/11994-quart-a-asyncio-alternative-to-flask-geopandas">
        <p class="card-text">
          Flask is a great web mirco-framework, that is best utilised with
          event-loop concurrency. Sadly with Flask the event-loop framework
          can’t be asyncio, although some extensions (Flask-Aiohttp) have tried.
          Quart is the solution as it shares the Flask API and is based on
          asyncio. In addition Quart goes beyond Flask adding HTTP/2 and
          websockets.
        </p>
        <p class="card-text">
          This talk will outline why event-loop concurrency is a good choice for
          web servers, why asyncio is a good choice and then give an overview of
          Quart, demonstrating features that go beyond the Flask framework.
        </p>
      </Talk>

      <Talk
        event="PyCon UK 2017"
        slidesHref="https://docs.google.com/presentation/d/10rj-rP5rks9xZeWu2rOWzs6olSaxH2CY6QzTDE4tt1I"
        title="Building Quart from Flask and Asyncio"
        videoHref="https://www.youtube.com/watch?v=EgpQcLy1kf0">
        <p class="card-text">
          The Python world is moving towards asyncio web (micro) frameworks,
          with Sanic and Aiohttp leading the way. Sadly the best (IMO) micro
          framework, Flask, is incompatible with asyncio. The Quart framework
          aims to solve this by reimplementing the Flask API using asyncio.
        </p>
        <p class="card-text">
          I intend to talk about the lessons and difficulties encountered with
          Flask, Asyncio and the combination. Detailing the difficulties calling
          coroutines from synchronous functions, and the eventual workaround,
          how the crux of Flask, global thread locals, have equivalents and how
          they work, finishing with a discussion about how Python monkey
          patching allows for some of the Flask extensions to work.
        </p>
      </Talk>
    </div>
  </div>
</section>
