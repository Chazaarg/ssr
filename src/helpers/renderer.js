import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Link } from "react-router-dom";
import Routes from "./Routes";
import { renderRoutes } from "react-router-config";
export default req => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  return `
  <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My React App</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script type="text/javascript" src="bundle.js"></script>
        </body>
    </html>
  `;
};
