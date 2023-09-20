const route = require('express').Router();

const City = require('../module/city.module');

route.get('/get_cities/:id', async (req, res) => {
    const stateId = req.params.id;

    try {
        const data = await City.find({state_id : stateId});  
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
    }
});

module.exports = route