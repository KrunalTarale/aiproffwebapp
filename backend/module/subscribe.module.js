const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema(
    {
        email : String,
        status : String
    }
)

const Subscriber = mongoose.model('Subscriber', subscribeSchema)

module.exports = Subscriber;