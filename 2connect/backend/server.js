import express from "express";
// const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'))
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      content: "Why was the math book sad? Because it had too many problems."
    },
    {
      id: 2,
      content: "Why did the scarecrow win an award? Because he was outstanding in his field."
    },
    { id: 3, 
      content: "What do you call a fake noodle? An impasta"
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
