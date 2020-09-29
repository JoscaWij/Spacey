import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import MenuPage from "./page/MenuPage";
import GamePage from "./page/GamePage";
import IntroPage from "./page/IntroPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/home">
            <MenuPage />
          </Route>
          <Route path="/game/intro">
            <IntroPage />
          </Route>
          <Route path="/game">
            <GamePage />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
