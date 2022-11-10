const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const { Cat } = require('./models');
const { response } = require('express');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('the homepage.')
});

app.get('/allcats', (req, res) => {
    res.sendFile(path.join(__dirname, '/allCats.html'));
});


// API
app.get('/api/cats', (req, res) => {
    Cat.find({}, (err, foundCats) => {
        if (err) return res.status(400).json(err);

        // Respond with the requested data
        res.json(foundCats);
    });
});


app.listen(3377, () => console.log('App on port 3377'));