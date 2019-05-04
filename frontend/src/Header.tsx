import * as React from "react";
import styled from "styled-components";

import avatar from "src/MeSudbury.jpeg";
import Nav from "src/Nav";

const STop = styled.div`
  background-color: ${props => props.theme.color.primary.dark};
  height: 24px;
`;

const SMiddle = styled.div`
  background-color: ${props => props.theme.color.primary.base};
  height: 128px;
  text-align: center;
`;

const SImg = styled.img`
  border: 4px solid ${props => props.theme.color.secondary.base};
  border-radius: 20%;
  height: calc(100% - 32px);
  margin: 12px;
`;

const Header = () => (
  <header>
    <STop />
    <SMiddle>
      <SImg
        src={avatar}
        alt="My avatar"
        title="Working as a scientist in a mine in Canada"
      />
    </SMiddle>
    <Nav />
  </header>
);

export default Header;
