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

app.post('/api/cats/new', (req, res) => {
    const catData = req.body;
    db.Cat.create(catData, (err, newCat) => {
        if (err) return res.status(400).json(err);
        res.json(newCat);
    });
});

app.delete('/api/cats/delete/:id', (req, res) => {
    // console.log(req.params.id);
    db.Cat.findByIdAndDelete(req.params.id, (err, deletedCity) => {
        if (err) return res.status(400).json(err);
        res.json({mission: "success"});
    });
});

app.listen(3377, () => console.log('App on port 3377'));