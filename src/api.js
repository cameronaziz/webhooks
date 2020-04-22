const express = require("express");
const serverless = require("serverless-http");
const urlencode = require("urlencode");

const app = express();

const router = express.Router();

router.post("/", (req, res) => {
  console.log("starting");
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on("end", () => {
    const text = urlencode.decode(body.replace("payload=", ""));
    const payload = JSON.parse(text);
    console.log(payload);
    res.end("ok");
  });
  console.log("end");
  res.send(`Hello`);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
