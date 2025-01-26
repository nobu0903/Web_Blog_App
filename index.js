import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// EJSをテンプレートエンジンとして設定
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/home", (req, res) => {
    res.render("index");
  });

app.get("/view", (req, res) => {
  res.render("post_view");
});

app.get("/update", (req, res) => {
  res.render("post_update");
});

app.get("/delete", (req, res) => {
  res.render("post_delete");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});