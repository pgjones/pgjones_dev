import * as React from "react";
import styled from "styled-components";

import Card from "./Card";
import { ColumnContainer } from "./Containers";
import { SA } from "./Typography";

const SH3 = styled.h3`
  margin-bottom: 0;
`;

const Info = () => (
  <ColumnContainer>
    <Card
      header={<SH3>Site</SH3>}
      body={
        <>
          <p>
            This site is open source (see link below) with the frontend written
            in Typescript using the React framework and the backend written in
            Python using the Quart framework.
          </p>
          <p>
            This site primarily exists as a place for me to blog about things
            with links to projects I work on.
          </p>
        </>
      }
      footer={
        <SA href="https://gitlab.com/pgjones/pgjones_dev">Source code</SA>
      }
    />
    <Card
      header={<SH3>Me</SH3>}
      body={
        <>
          <p>
            I'm a software engineer living in London, previously I was a
            particle physicist working on the SNO+ experiment. I completed my
            DPhil at Oxford (Lincoln College) in 2011, then worked as a postdoc
            at QMUL before switching to industry. I'm now Head of Engineering at
            Octopus Wealth, having previously been VP Engineering at Smarkets.
          </p>

          <p>
            I primarily contribute to open source in Python on projects related
            to web development specifically the HTTP stack. At work I currently
            write Python, Typescript, and Terraform, although I mostly manage
            the tech effort.
          </p>
        </>
      }
    />
  </ColumnContainer>
);

export default Info;
