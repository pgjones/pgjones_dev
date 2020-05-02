import * as React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Bingo from "src/Bingo";
import Blog from "src/Blog";
import Chat from "src/Chat";
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
            <Route exact={true} path="/">
              <Projects />
            </Route>
            <Route exact={true} path="/bingo/">
              <Bingo />
            </Route>
            <Route exact={true} path="/blog/">
              <Blog />
            </Route>
            <Route exact={true} path="/blog/:id/">
              <Post />
            </Route>
            <Route exact={true} path="/chat/">
              <Chat />
            </Route>
            <Route exact={true} path="/info/">
              <Info />
            </Route>
            <Route exact={true} path="/talks/">
              <Talks />
            </Route>
          </Switch>
        </div>
      </>
    </BrowserRouter>
  </>
);

export default App;
