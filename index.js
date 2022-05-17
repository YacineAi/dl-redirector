const express = require("express");
const request = require("request");
const app = express();
const port = 3000;
app.get("/", function (_req, res) {
  res.sendStatus(200);
});
app.get("/dl", async function (_req, res) {
  var fid = Math.floor(Math.random() * 999999999999);
  res.setHeader("content-disposition", `attachment; filename=${fid}.mp4`);
  request(_req.query.url).pipe(res);
});
app.listen(process.env.PORT || port, () =>
  console.log(`App is on port : ${port}`)
);