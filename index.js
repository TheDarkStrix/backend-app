var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8080;
var router = express.Router();

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// al routers should be prefixed with api
app.use("/api", router);

//Initial router
app.get("/", (req, res) => {
  res.json({ message: "api working" });
});

//run the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
