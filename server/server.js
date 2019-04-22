import path from "path";
import fs from "fs";

import express from "express";
import renderer from "../src/helpers/renderer";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = 3001;
const app = express();

app.use(express.static("build"));
app.get("*", (req, res) => {
  const content = renderer(req, null, {});

  res.send(content);
});

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
