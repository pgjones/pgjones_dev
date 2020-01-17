import * as React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Blog from "./Blog";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import Post from "./Post";
import Projects from "./Projects";
import Style from "./Style";
import Talks from "./Talks";
import theme from "./theme";

const SBody = styled.main`
  flex-grow: 1;
  margin-bottom: 16px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>PGJones personal website</title>
        <meta
          name="description"
          content="Information about software engineering, specifically web systems in Python and Typescript."
        />
      </Helmet>
      <Style />
      <BrowserRouter>
        <div>
          <Header />
          <SBody>
            <Switch>
              <Route exact={true} path="/" component={Projects} />
              <Route exact={true} path="/blog/" component={Blog} />
              <Route exact={true} path="/blog/:id/" component={Post} />
              <Route exact={true} path="/info/" component={Info} />
              <Route exact={true} path="/talks/" component={Talks} />
            </Switch>
          </SBody>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  </ThemeProvider>
);

export default App;
