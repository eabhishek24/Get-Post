const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));

app.get("/register" ,(req,res) => {
  res.send("standard get response")
});

app.post("/register" ,(req,res) => {
    console.log(req.body)
    res.send("standard post response")
  });


app.listen(port , () =>{
    console.log(`listening to port ${port}`);
});


