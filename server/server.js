import path from "path";
import fs from "fs";

import express from "express";
import renderer from "../src/helpers/renderer";
import Routes from "../src/helpers/Routes";
import { matchRoutes } from "react-router-config";
import createStore from "../src/helpers/createStore";

const PORT = 3000;
const app = express();

app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
