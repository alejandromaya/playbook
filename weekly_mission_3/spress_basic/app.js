const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello my bro!');
});

app.get('/launchex', (req, res) => {
    res.send('Bienvenidos a LauncheX')
});

app.get('/exploresInNode', (req, res) =>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer);
});

app.get('/explorers/:explorerName', (req, res) =>{
    res.send(req.params);
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});