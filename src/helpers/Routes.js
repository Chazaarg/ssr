import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../Home";
import About from "../About";
export default () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
};
