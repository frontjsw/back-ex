const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Yore Name</label><input type='text' name='username'/><button type='button'>Submit</button></form>"
  );
});

app.post("/store-user", function (req, res) {
  const username = req.body.username;
  console.log(username);
  res.send("<h1>" + username + " stored!</h1>");
});

app.listen(3000);
