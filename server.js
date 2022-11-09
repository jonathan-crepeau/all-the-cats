const express = require('express')
const bodyParser = require('body-parser');
const app = express();

const { Cat } = require('./models');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('the homepage.')
});


Cat.find({}, (err, foundItem) => {
    if (err) {
        console.log(err);
    } else {
        console.log(foundItem)
    }
});

app.listen(3377, () => console.log('App on port 3377'));