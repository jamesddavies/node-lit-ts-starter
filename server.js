const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.use(function (req, res, next) {
    res.status(404).send('Oops!')
})

app.listen(3000, () => console.log('App listening on port 3000'));