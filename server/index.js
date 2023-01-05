const express = require('express')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname + "/public")))

const PORT = process.env.PORT || 5000

// Manejar las peticiones GET en la ruta /api
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT)