import * as React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Blog from "src/Blog";
import Info from "src/Info";
import Nav from "src/Nav";
import Post from "src/Post";
import Projects from "src/Projects";
import Talks from "src/Talks";

const App = () => (
  <>
    <Helmet>
      <title>PGJones personal website</title>
      <meta
        name="description"
        content="Information about software engineering, specifically web systems in Python and Typescript."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="pdgjones" />
    </Helmet>
    <BrowserRouter>
      <>
        <Nav />
        <div className="main-wrapper">
          <Switch>
            <Route exact={true} path="/" component={Projects} />
            <Route exact={true} path="/blog/" component={Blog} />
            <Route exact={true} path="/blog/:id/" component={Post} />
            <Route exact={true} path="/info/" component={Info} />
            <Route exact={true} path="/talks/" component={Talks} />
          </Switch>
        </div>
      </>
    </BrowserRouter>
  </>
);

export default App;
