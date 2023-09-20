const route = require('express').Router();

const State = require('../module/states.module');

route.get('/get_states/:id', async (req, res) => {
    const countryId = req.params.id;
    try {
        const data = await State.find({ country_id: countryId });
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
    }
});


module.exports = route