// DATI

const express = require("express");
const app = express();
const port = 3000;
const myPosts = require("./post");

// ESECUZIONE

app.get( "/", (req,res) => {
res.send("Server del mio blog")
});

app.get("/bacheca", (req,res) => {
    const data = {
        post : myPosts,
        totale : myPosts.length
    }
    res.json(data)
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log("il mio server è partito ")
});