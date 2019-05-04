import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { ColumnContainer } from "./Containers";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Style from "./Style";
import Talks from "./Talks";
import theme from "./theme";

const SBody = styled.main`
  flex-grow: 1;
  margin: 0 auto;
  padding: 1em;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Style />
      <BrowserRouter>
        <ColumnContainer>
          <Header />
          <SBody>
            <Switch>
              <Route exact={true} path="/" component={Projects} />
              <Route exact={true} path="/talks/" component={Talks} />
            </Switch>
          </SBody>
          <Footer />
        </ColumnContainer>
      </BrowserRouter>
    </>
  </ThemeProvider>
);

export default App;
