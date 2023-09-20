const route = require('express').Router();
const Topic = require('../module/topics.module');

route.get('/get_topics', async (req, res) => {
    try {
        const data = await Topic.find({});
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = route;