import * as React from "react";
import styled from "styled-components";

import Card from "./Card";
import { MixedContainer } from "./Containers";
import Hypercorn from "./Hypercorn.png";
import Quart from "./Quart.png";
import { SA } from "./Typography";

const SImg = styled.img`
  display: block;
  margin: auto;
  max-height: 100px;
  max-width: 100%;
`;

const SRole = styled.label`
  display: block;
  font-size: x-small;
  text-align: right;
`;

const Projects = () => (
  <MixedContainer>
    <Card
      header={
        <>
          <SImg src={Quart} />
          <SRole>Author</SRole>
        </>
      }
      body="Quart is a Python ASGI web microframework, that allows websites to be
            written utilising the async await syntax and the familiar
            Flask API. This is possible as Quart is a
            re-implementation of the Flask API using async/await and
            ASGI."
      footer={
        <>
          <SA href="https://gitlab.com/pgjones/quart">Source code</SA>&nbsp;
          <SA href="https://pgjones.gitlab.io/quart/">Documentation</SA>
        </>
      }
    />
    <Card
      header={
        <>
          <SImg src={Hypercorn} />
          <SRole>Author</SRole>
        </>
      }
      body="Hypercorn is a Python ASGI server, capable of serving HTTP/1, HTTP/2
            request and WebSockets over both HTTP 1 and HTTP/2. In
            addition it supports asyncio and Trio event loop workers."
      footer={
        <>
          <SA href="https://gitlab.com/pgjones/hypercorn">Source code</SA>&nbsp;
          <SA href="https://pgjones.gitlab.io/hypercorn/">Documentation</SA>
        </>
      }
    />
    <Card
      header={
        <>
          <h3>Quart-Trio</h3>
          <SRole>Author</SRole>
        </>
      }
      body="Quart-Trio is a Quart extension that supports the Trio event loop
            (rather than asyncio)."
      footer={
        <>
          <SA href="https://gitlab.com/pgjones/quart-trio">Source code</SA>
        </>
      }
    />
    <Card
      header={
        <>
          <h3>Quart-CORS</h3>
          <SRole>Author</SRole>
        </>
      }
      body="Quart-CORS is a Quart extension that adds relevant Cross Origin
            Resource Sharing headers"
      footer={
        <>
          <SA href="https://gitlab.com/pgjones/quart-cors">Source code</SA>
        </>
      }
    />
    <Card
      header={
        <>
          <h3>wsproto</h3>
          <SRole>Maintainer</SRole>
        </>
      }
      body="wsproto is a Sans-IO implementation of the WebSocket protocol. It
            supports both HTTP/1 and HTTP/2 WebSockets."
      footer={
        <>
          <SA href="https://github.com/python-hyper/wsproto">Source code</SA>
        </>
      }
    />
  </MixedContainer>
);

export default Projects;
