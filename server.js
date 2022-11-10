const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// const { Cat } = require('./models');
const db = require('./models');

app.use(express.static(`${__dirname}/public`));

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({gilmore: 'rory'});
});

app.get('/cats/all', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/allCats.html'));
});

app.get('/cats/new', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/newCat.html'))
})


// API
app.get('/api/cats', (req, res) => {
    db.Cat.find({}, (err, foundCats) => {
        if (err) return res.status(400).json(err);
        // Respond with the requested data
        res.json(foundCats)
    });
});


app.listen(3377, () => console.log('App on port 3377'));