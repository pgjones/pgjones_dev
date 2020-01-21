import * as React from "react";
import { Helmet } from "react-helmet";

import Hypercorn from "./Hypercorn.png";
import Quart from "./Quart.png";

const Projects = () => (
  <>
    <Helmet>
      <title>Open source | PGJones</title>
      <meta
        name="description"
        content="The open source projects I help maintain."
      />
    </Helmet>
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center single-col-max-width">
        <h2 className="heading">Open Source</h2>
        <p className="intro">
          These are the open source projects that I am involved with, either as
          the author or as a maintainer.
        </p>
      </div>
    </section>

    <section className="projects-list px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-cards row isotope">
          <div className="isotope-item col-md-6 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-img-holder">
                  <img src={Quart} className="card-img" alt="image" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://gitlab.com/pgjones/quart"
                      className="theme-link"
                    >
                      Quart
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    Quart is a Python ASGI web microframework, that allows
                    websites to be written utilising the async await syntax and
                    the familiar Flask API. This is possible as Quart is a
                    re-implementation of the Flask API using async/await and
                    ASGI.
                  </p>
                  <p className="card-text">
                    <a href="https://gitlab.com/pgjones/quart">Source code</a>{" "}
                    and{" "}
                    <a href="https://pgjones.gitlab.io/quart/">Documentation</a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am the author of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="isotope-item col-md-6 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-img-holder">
                  <img src={Hypercorn} className="card-img" alt="image" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://gitlab.com/pgjones/hypercorn"
                      className="theme-link"
                    >
                      Hypercorn
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    Hypercorn is a Python ASGI server, capable of serving
                    HTTP/1, HTTP/2, and HTTP/3 requests and WebSockets over both
                    HTTP/1, HTTP/2 and HTTP/3. In addition it supports asyncio
                    and Trio event loop workers.
                  </p>
                  <p className="card-text">
                    <a href="https://gitlab.com/pgjones/hypercorn">
                      Source code
                    </a>{" "}
                    and{" "}
                    <a href="https://pgjones.gitlab.io/hypercorn/">
                      Documentation
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am the author of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="isotope-item col-md-4 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://gitlab.com/pgjones/quart-trio"
                      className="theme-link"
                    >
                      Quart-Trio
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    Quart-Trio is a Quart extension that supports the
                    <a href="https://trio.readthedocs.io/en/stable/">
                      Trio
                    </a>{" "}
                    event loop (rather than asyncio).
                  </p>
                  <p className="card-text">
                    <a href="https://gitlab.com/pgjones/quart-trio">
                      Source code
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am the author of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="isotope-item col-md-4 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://gitlab.com/pgjones/quart-cors"
                      className="theme-link"
                    >
                      Quart-Cors
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    Quart-CORS is a Quart extension that adds relevant Cross
                    Origin Resource Sharing headers.
                  </p>
                  <p className="card-text">
                    <a href="https://gitlab.com/pgjones/quart-cors">
                      Source code
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am the author of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="isotope-item col-md-4 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://gitlab.com/pgjones/quart-rate-limiter"
                      className="theme-link"
                    >
                      Quart-Rate-Limiter
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    Quart-Rate-Limiter is an extension for Quart to allow for
                    rate limits to be defined and enforced on a per route basis.
                    It is interesting in that it utilises the GCRA, rather than
                    a leaky bucket approach.
                  </p>
                  <p className="card-text">
                    <a href="https://gitlab.com/pgjones/quart-rate-limiter">
                      Source code
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am the author of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="isotope-item col-md-4 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://github.com/python-hyper/wsproto"
                      className="theme-link"
                    >
                      wsproto
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    wsproto is a Sans-IO implementation of the WebSocket
                    protocol. It supports both HTTP/1 and HTTP/2 WebSockets.
                  </p>
                  <p className="card-text">
                    <a href="https://github.com/python-hyper/wsproto">
                      Source code
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am a maintainer of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="isotope-item col-md-4 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://github.com/pallets/werkzeug"
                      className="theme-link"
                    >
                      Werkzeug
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    Werkzeug is a comprehensive WSGI web application library, my
                    effort is to make it a ASGI web application library as well.
                  </p>
                  <p className="card-text">
                    <a href="https://github.com/pallets/werkzeug">
                      Source code
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am a maintainer of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="isotope-item col-md-4 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://github.com/python-hyper/hyper-h2"
                      className="theme-link"
                    >
                      h2
                    </a>
                  </h5>
                  <p className="card-text card-main">
                    h2 is a Sans-IO implementation of the HTTP/2 protocol.
                  </p>
                  <p className="card-text">
                    <a href="https://github.com/python-hyper/wsproto">
                      Source code
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I am a maintainer of this project
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Projects;
