const express = require("express");
const app = express();
app.use(express.json())
const port = 3000;

app.get("/", (req, res) => {
  res.send("get");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("post");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
