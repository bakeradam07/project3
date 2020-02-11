import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider } from "./state/context";
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      <StateProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </StateProvider>
    </Router>
  );
}


function NoMatch() {
  return <h1>You lost</h1>;
}
