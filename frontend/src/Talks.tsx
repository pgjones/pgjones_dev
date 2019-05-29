import * as React from "react";
import styled from "styled-components";

import Card from "./Card";
import { ColumnContainer } from "./Containers";
import { SA } from "./Typography";

const SP = styled.p`
  font-style: italic;
`;

const SH3 = styled.h3`
  margin-bottom: 0;
`;

const Talks = () => (
  <ColumnContainer>
    <Card
      header={
        <>
          <SH3>
            Async web servers; design and implementation
            <br />
            <small>London Python 2019</small>
          </SH3>
        </>
      }
      body={
        <>
          <SP>
            In this talk I'll describe an idealised process I've gone through
            developing Hypercorn. I'll define the aims of a modern async web
            server, overview the tooling used to be async, and finally the
            constraints imposed by the event loop choice.
          </SP>
        </>
      }
      footer={
        <>
          <SA href="https://docs.google.com/presentation/d/1xoAe5TWfzjt1JsqF5701hYjLaRi3S27M6MHrqGfTKPw/">
            Slides
          </SA>
        </>
      }
    />

    <Card
      header={
        <>
          <SH3>
            Quart; an ASGI alternative to Flask
            <br />
            <small>EuroPython 2018</small>
          </SH3>
        </>
      }
      body={
        <>
          <SP>
            Flask is a great web micro-framework, that is best utilised with
            event-loop concurrency. Sadly with Flask the event-loop framework
            can’t be asyncio, although some extensions (Flask-Aiohttp) have
            tried. Quart is the solution as it shares the Flask API and is based
            on asyncio. In addition Quart goes beyond Flask adding HTTP/2 and
            websockets.
          </SP>
          <SP>
            This talk will outline why ASGI is a good asynchronous version of
            WSGI, and then give an overview of Quart, demonstrating features
            that go beyond the Flask framework.
          </SP>
        </>
      }
      footer={
        <>
          <SA href="https://youtu.be/t8-Y7Kivuu0">Video</SA>&nbsp;
          <SA href="https://drive.google.com/open?id=1E6_G_ADuQ8J4t2UVb7rCYmNT700LclzIu7kFGrcndQ8">
            Slides
          </SA>
        </>
      }
    />

    <Card
      header={
        <>
          <SH3>
            Quart; a asyncio alternative to Flask
            <br />
            <small>London Python 2018</small>
          </SH3>
        </>
      }
      body={
        <>
          <SP>
            Flask is a great web mirco-framework, that is best utilised with
            event-loop concurrency. Sadly with Flask the event-loop framework
            can’t be asyncio, although some extensions (Flask-Aiohttp) have
            tried. Quart is the solution as it shares the Flask API and is based
            on asyncio. In addition Quart goes beyond Flask adding HTTP/2 and
            websockets.
          </SP>
          <SP>
            This talk will outline why event-loop concurrency is a good choice
            for web servers, why asyncio is a good choice and then give an
            overview of Quart, demonstrating features that go beyond the Flask
            framework.
          </SP>
        </>
      }
      footer={
        <>
          <SA href="https://skillsmatter.com/skillscasts/11994-quart-a-asyncio-alternative-to-flask-geopandas">
            Video
          </SA>
          &nbsp;
          <SA href="https://docs.google.com/presentation/d/1NVFL-z7_aG2HNGvYpTMBGJOqk6houo13U6ABwfXJ94E">
            Slides
          </SA>
        </>
      }
    />

    <Card
      header={
        <>
          <SH3>
            Building Quart from Flask and Asyncio
            <br />
            <small>PyCon UK 2017</small>
          </SH3>
        </>
      }
      body={
        <>
          <SP>
            The Python world is moving towards asyncio web (micro) frameworks,
            with Sanic and Aiohttp leading the way. Sadly the best (IMO) micro
            framework, Flask, is incompatible with asyncio. The Quart framework
            aims to solve this by reimplementing the Flask API using asyncio.
          </SP>
          <SP>
            I intend to talk about the lessons and difficulties encountered with
            Flask, Asyncio and the combination. Detailing the difficulties
            calling coroutines from synchronous functions, and the eventual
            workaround, how the crux of Flask, global thread locals, have
            equivalents and how they work, finishing with a discussion about how
            Python monkey patching allows for some of the Flask extensions to
            work.
          </SP>
        </>
      }
      footer={
        <>
          <SA href="https://www.youtube.com/watch?v=EgpQcLy1kf0">Video</SA>
          &nbsp;
          <SA href="https://docs.google.com/presentation/d/10rj-rP5rks9xZeWu2rOWzs6olSaxH2CY6QzTDE4tt1I">
            Slides
          </SA>
        </>
      }
    />
  </ColumnContainer>
);

export default Talks;
