const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


// SECTION - INITIALIZE DATABASES
// const { Cat } = require('./models');
const db = require('./models');


// SECTION - MIDDLEWARE
app.use(express.static(`${__dirname}/public`));

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


// SECTION - VIEW ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/homepage.html'))
});

app.get('/cats/all', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/allCats.html'));
});

app.get('/cats/new', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/newCat.html'))
})


// SECTION - API ROUTES

// INDEX (GET ALL) CATS
app.get('/api/cats', (req, res) => {
    db.Cat.find({}, (err, foundCats) => {
        if (err) return res.status(400).json(err);
        // Respond with the requested data
        res.json(foundCats)
    });
});


app.listen(3377, () => console.log('App on port 3377'));