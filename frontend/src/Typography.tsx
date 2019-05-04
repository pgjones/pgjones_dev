import styled from "styled-components";

export const SA = styled.a`
  background-image: linear-gradient(
    ${props => props.theme.color.secondary.dark},
    ${props => props.theme.color.secondary.dark}
  );
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  color: ${props => props.theme.color.secondary.dark};
  text-decoration: none;
  text-transform: uppercase;
  transition: background-size 0.3s;

  &:hover,
  &:focus {
    background-size: 100% 2px;
    color: ${props => props.theme.color.secondary.dark};
  }
`;
