import * as express from "express";
import * as serverless from "serverless-http";

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/.netlify/function/server", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});

export const handler = serverless(app);
