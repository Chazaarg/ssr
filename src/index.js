import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./helpers/Routes";

ReactDOM.hydrate(
  <BrowserRouter>
    <Link to="/about">About</Link>
    <Link to="/">Home</Link>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>,
  document.getElementById("root")
);
