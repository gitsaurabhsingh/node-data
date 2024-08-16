const fs = require("fs");
const expess = require("express");
const cors = require("cors");
const port = 4000;
const app = expess();

app.use(expess.json());
app.use(cors());

const dataItem = fs.readFileSync(`${__dirname}/Data/data.json`, "utf-8");
const dataApi = JSON.parse(dataItem);

const dataItem1 = fs.readFileSync(`${__dirname}/Data/header.json`, "utf-8");
const dataApi1 = JSON.parse(dataItem1);

app.get("/", (req, res) => {
  res.send(dataApi);
});

app.get("/header", (req, res) => {
  res.send(dataApi1);
});
app.listen(port, () => {
  console.log(`localhost//:${port}`);
});
