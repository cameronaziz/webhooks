const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.post("/", (req, res) => {
  console.log(JSON.stringify(req.headers));
  console.log(req.body);
  res.send(`Hello`);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
