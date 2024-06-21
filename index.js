const fs = require("fs");
const expess = require("express");
const port = 4000;
const app = expess();

const dataItem = fs.readFileSync(`${__dirname}/Data/data.json`, "utf-8");
const dataApi = JSON.parse(dataItem);

app.get("/", (req, res) => {
  res.send(dataApi);
});
app.listen(port, () => {
  console.log(`localhost//:${port}`);
});
