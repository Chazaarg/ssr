import path from "path";
import fs from "fs";

import express from "express";
import renderer from "../src/helpers/renderer";

const PORT = 3001;
const app = express();

app.get("*", (req, res) => {
  res.send(renderer(req));
});

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
