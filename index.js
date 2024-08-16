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
const dataItem2 = fs.readFileSync(`${__dirname}/Data/banner.json`, "utf-8");
const dataApi2 = JSON.parse(dataItem2);
const dataItem3 = fs.readFileSync(`${__dirname}/Data/futured.json`, "utf-8");
const dataApi3 = JSON.parse(dataItem3);
const dataItem4 = fs.readFileSync(`${__dirname}/Data/Footer.json`, "utf-8");
const dataApi4 = JSON.parse(dataItem4);

app.get("/", (req, res) => {
  res.send(dataApi);
});

app.get("/header", (req, res) => {
  res.send(dataApi1);
});
app.get("/banner", (req, res) => {
  res.send(dataApi2);
});
app.get("/futured", (req, res) => {
  res.send(dataApi3);
});
app.get("/footer", (req, res) => {
  res.send(dataApi4);
});
app.listen(port, () => {
  console.log(`localhost//:${port}`);
});
