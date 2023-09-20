const rotue = require('express').Router();
const Subscriber = require('../module/subscribe.module');


rotue.get('/update_subscribed_user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        const result = await Subscriber.updateOne({ _id: id }, { status: "verified" });
        if(result) {
            res.send({status : "You are verified"});
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = rotue;
