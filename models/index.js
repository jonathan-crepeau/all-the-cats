const mongoose = require('mongoose');

const URI = "mongodb+srv://jonathan-crepeau:my-password@city-cluster.quinohu.mongodb.net/post-test?retryWrites=true&w=majority"

mongoose.connect(URI)
    .then(() => console.log('DB running'))
    .catch(() => console.log('DB NOT RUNNING'));

module.exports = {
    Cat: require('./Cat'),
}