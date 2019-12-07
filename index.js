"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use( (req, res, next) => {
    res.status(404).send('Page not found!');
});

app.get('/', getRoot);

app.listen(port, () => console.log(`Listening on port ${port}`));

function getRoot(req, res) {
    res.send('Hello World');
}


