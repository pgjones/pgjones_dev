import * as React from "react";
import styled from "styled-components";

import Github from "./Github";
import Gitlab from "./Gitlab";
import Medium from "./Medium";
import Twitter from "./Twitter";
import { SA } from "./Typography";

const SFooter = styled.footer`
  background-color: ${props => props.theme.color.primary.dark};
  text-align: center;
`;

const SLink = styled(SA)`
  fill: ${props => props.theme.color.secondary.base};

  & svg {
    padding: 4px 4px 0 4px;
  }
`;

const Footer = () => (
  <SFooter>
    <SLink href="https://github.com/pgjones">
      <Github />
    </SLink>
    <SLink href="https://gitlab.com/pgjones">
      <Gitlab />
    </SLink>
    <SLink href="https://medium.com/@pgjones">
      <Medium />
    </SLink>
    <SLink href="https://twitter.com/pdgjones">
      <Twitter />
    </SLink>
  </SFooter>
);

export default Footer;
