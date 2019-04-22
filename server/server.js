import path from "path";
import fs from "fs";

import express from "express";
import renderer from "../src/helpers/renderer";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = 3000;
const app = express();

const router = express.Router();

const serverRenderer = (req, res, next) => {
  console.log(req.originalUrl);
  res.send(renderer(req.originalUrl));
};
router.use("/", serverRenderer);

router.use(express.static(path.resolve(__dirname, "..", "build")));

// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
