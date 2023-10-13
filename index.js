const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hola");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./logoBOA-black.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "bray",
    lastname: "orcon arellano",
    age: 23,
    points: [1, 2, 3, 4],
    adress: {
      city: "chupaca",
      street: "HuamanCC-Chico",
    },
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204);
  });    

app.listen(3000);
console.log(`Server on port ${3000}`);
