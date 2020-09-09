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
  res.send(req.body)

});

const data = {
  name: 'jane',
  batch: '17.2',
  email: 'janedoe@gmail.com'
}

app.patch("/profile", function (req, res) {
   
    data ={
      ...data,
      ...req.body
    }
    res.send(data)
  });

  app.put('/profile',(req,res)=>{
    if (name && batch && email) {
      data = {
        ...req.body
      }
      res.send(data)
    }else{
      res.send({
        success:false,
        message:'all form must be filled'
      })
    }
  })

  app.get('/profile',(res,response)=>{
    res.send(data)
  })
  app.delete('/profile',(req,res)=>{
    data= null
    res.send(data)
  })

  


app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
