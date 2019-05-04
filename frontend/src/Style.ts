import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  body {
    color: ${props => props.theme.color.primary.base};
    font-family: "Verdana", "Geneva", sans-serif;
    line-height: 1.5;
    margin: 0;
  }
`;

export default Style;
