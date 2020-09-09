const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.send("Welcome to my first backend");
});

app.post("/data", (req, res) => {
  console.log("Post body:", req.body);
  res.sendStatus(200);
});

app.post("/profile", function (req, res) {
  const data = {
    name: req.body.name,
    batch: req.body.batch,
    email: req.body.email,
  };

  res.json(data);
});

app.patch("/profile", function (req, res) {
    const data = {
      name: req.body.name,
      batch: req.body.batch,
      email: req.body.email,
    }
  
    res.json(data);
  });


  


app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
