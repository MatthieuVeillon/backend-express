const request = require("request-promise");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
  let number = Math.floor(Math.random() * 100);
  res.send(`Hey here is your number : ${number}`);
});
app.listen(3000, function() {
  console.log("listening on port 3000");
});
