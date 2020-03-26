import * as React from "react";

const Talks = () => {
  return (
    <>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center">
          <h2 className="heading">My talks About Software Development</h2>
        </div>
      </section>

      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">Web development with Trio</h5>
                  <p className="card-text">
                    The introduction of asyncio to the Python stdlib led to a
                    flurry of new web frameworks. Lesser known though are the
                    async/await based event loop alternatives to asyncio, curio,
                    and trio. Yet the development of asyncio has been and
                    continues to be, heavily influenced by these two projects.
                  </p>
                  <p className="card-text">
                    This talk will introduce Trio and motivate why I think it is
                    a great choice for web development. I'll talk about the
                    advantages trio brings and the ecosystem available to
                    developers. As a practical example I'll show my own site
                    (frontend React + backend Quart-Trio).
                  </p>
                  <p className="mb-0">
                    <a
                      href="https://docs.google.com/presentation/d/1Nm7ojmwtxt-AP5sou6uXwDdCe2KYuy7HtqXI9-Ha9Z4/edit?usp=sharing"
                      className="more-link"
                    >
                      Read Slides →
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">London Python 2020</small>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">
                    An introduction to ASGI, Asynchronous Server Gateway
                    Interface
                  </h5>
                  <p className="card-text">
                    WSGI has been a huge success, allowing for an ecosystem of
                    servers and frameworks to exist and develop independently,
                    however, WSGI is unable to support websockets or the new
                    async/await syntax. ASGI is the asynchronous spiritual
                    successor to WSGI, with websockets and async support built
                    in.
                  </p>
                  <p className="mb-0">
                    <a
                      href="https://youtu.be/t3gCK9QqXWU"
                      className="more-link"
                    >
                      Watch →
                    </a>
                    <br />
                    <a
                      href="https://docs.google.com/presentation/d/1lanW471hjyVGk06qi3oGCecJydBVZpYMdaM8bvptIu0/"
                      className="more-link"
                    >
                      Read Slides →
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">PyLondinium 2019</small>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Async web servers; design and implementation
                  </h5>
                  <p className="card-text">
                    In this talk I'll describe an idealised process I've gone
                    through developing Hypercorn. I'll define the aims of a
                    modern async web server, overview the tooling used to be
                    async, and finally the constraints imposed by the event loop
                    choice.
                  </p>
                  <p className="mb-0">
                    <a
                      href="https://docs.google.com/presentation/d/1xoAe5TWfzjt1JsqF5701hYjLaRi3S27M6MHrqGfTKPw/"
                      className="more-link"
                    >
                      Read Slides →
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">London Python 2019</small>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Quart; an ASGI alternative to Flask
                  </h5>
                  <p className="card-text">
                    Flask is a great web micro-framework, that is best utilised
                    with event-loop concurrency. Sadly with Flask the event-loop
                    framework can’t be asyncio, although some extensions
                    (Flask-Aiohttp) have tried. Quart is the solution as it
                    shares the Flask API and is based on asyncio. In addition
                    Quart goes beyond Flask adding HTTP/2 and websockets.
                  </p>
                  <p className="card-text">
                    This talk will outline why ASGI is a good asynchronous
                    version of WSGI, and then give an overview of Quart,
                    demonstrating features that go beyond the Flask framework.
                  </p>
                  <p className="mb-0">
                    <a
                      href="https://youtu.be/t8-Y7Kivuu0"
                      className="more-link"
                    >
                      Watch →
                    </a>
                    <br />
                    <a
                      href="https://drive.google.com/open?id=1E6_G_ADuQ8J4t2UVb7rCYmNT700LclzIu7kFGrcndQ8"
                      className="more-link"
                    >
                      Read Slides →
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">EuroPython 2018</small>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Quart; a asyncio alternative to Flask
                  </h5>
                  <p className="card-text">
                    Flask is a great web mirco-framework, that is best utilised
                    with event-loop concurrency. Sadly with Flask the event-loop
                    framework can’t be asyncio, although some extensions
                    (Flask-Aiohttp) have tried. Quart is the solution as it
                    shares the Flask API and is based on asyncio. In addition
                    Quart goes beyond Flask adding HTTP/2 and websockets.
                  </p>
                  <p className="card-text">
                    This talk will outline why event-loop concurrency is a good
                    choice for web servers, why asyncio is a good choice and
                    then give an overview of Quart, demonstrating features that
                    go beyond the Flask framework.
                  </p>
                  <p className="mb-0">
                    <a
                      href="https://skillsmatter.com/skillscasts/11994-quart-a-asyncio-alternative-to-flask-geopandas"
                      className="more-link"
                    >
                      Watch →
                    </a>
                    <br />
                    <a
                      href="https://docs.google.com/presentation/d/1NVFL-z7_aG2HNGvYpTMBGJOqk6houo13U6ABwfXJ94E"
                      className="more-link"
                    >
                      Read Slides →
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">London Python 2018</small>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <div className="card blog-post-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Building Quart from Flask and Asyncio
                  </h5>
                  <p className="card-text">
                    The Python world is moving towards asyncio web (micro)
                    frameworks, with Sanic and Aiohttp leading the way. Sadly
                    the best (IMO) micro framework, Flask, is incompatible with
                    asyncio. The Quart framework aims to solve this by
                    reimplementing the Flask API using asyncio.
                  </p>
                  <p className="card-text">
                    I intend to talk about the lessons and difficulties
                    encountered with Flask, Asyncio and the combination.
                    Detailing the difficulties calling coroutines from
                    synchronous functions, and the eventual workaround, how the
                    crux of Flask, global thread locals, have equivalents and
                    how they work, finishing with a discussion about how Python
                    monkey patching allows for some of the Flask extensions to
                    work.
                  </p>
                  <p className="mb-0">
                    <a
                      href="https://www.youtube.com/watch?v=EgpQcLy1kf0"
                      className="more-link"
                    >
                      Watch →
                    </a>
                    <br />
                    <a
                      href="https://docs.google.com/presentation/d/10rj-rP5rks9xZeWu2rOWzs6olSaxH2CY6QzTDE4tt1I"
                      className="more-link"
                    >
                      Read Slides →
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">PyCon UK 2017</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Talks;
