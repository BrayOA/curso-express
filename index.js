const express = require("express");
const app = express();

    app.get("/", (req, res) => {
    res.send("Hola mundo");
    });

    app.get("/about", (req, res) => {
    res.send("About");
    });

    app.get("/weater", (req, res) => {
    res.send("The current weather is Nice");
    });

    app.use((req, res) => {
        res.status(404).send('Error 404. Nose encontro tu pagina')
    })

app.listen(3000);
console.log(`Server on port ${3000}`);
