require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
    res.send("Twitter API");
});

app.get("/login",(req,res)=>{
    res.send("<h1>Login Page");
});

app.get("/youtube",(req,res)=>{
    res.send("YouTube API");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
