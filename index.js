const express = require("express");
const app = express();

app.al("/info", (req, res) => {
  res.send("server info");
});

app.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("lista de libros de js");
  } else {
    res.send("pagina normal");
  }
});

app.get("/hello/:username", (req, res) => {
  res.send(`hello ${req.params.username.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:usernames/photo", (req, res) => {
  console.log(req.params);
  if (req.params.usernames === "fazt") {
    return res.sendFile("./logoBOA-black.png", {
      root: __dirname,
    });
  }

  res.send("el usuario no tiene acceso");
});

app.get("/name/:nombre/age/:age", (req, res) => {
  console.log(req.params);
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
