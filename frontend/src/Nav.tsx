import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SNav = styled.nav`
  background-color: ${props => props.theme.color.primary.light};
  height: 32px;
`;

const SNavLink = styled(NavLink)`
  background-image: linear-gradient(
    ${props => props.theme.color.secondary.base},
    ${props => props.theme.color.secondary.base}
  );
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  color: ${props => props.theme.color.primary.text};
  display: inline-block;
  flex-grow: 1;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
  transition: background-size 0.3s;

  &:hover,
  &:focus {
    background-size: 100% 2px;
    color: ${props => props.theme.color.secondary.base};
  }
`;

const SDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Nav = () => (
  <SNav>
    <SDiv>
      <SNavLink to="/">Open Source</SNavLink>
      <SNavLink to="/blog/">Blog</SNavLink>
      <SNavLink to="/talks/">Talks</SNavLink>
      <SNavLink to="/info/">Info</SNavLink>
    </SDiv>
  </SNav>
);

export default Nav;
