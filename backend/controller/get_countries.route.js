const route = require('express').Router();
const Country = require('../module/country.module');

route.get('/get_countries', async (req, res) => {
    try {
        const data = await Country.find({});
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = route;