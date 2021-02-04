var express = require("express");
var app = express();
var nunjucks = require("nunjucks");
var path = require("path");

nunjucks.configure(path.join(__dirname, "views"), {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", require("./router/home"));
app.get("/:hero", require("./router/hero"));

app.listen(8012, () => {
  console.log(`lol serve start ok! port:${8012}`);
});
