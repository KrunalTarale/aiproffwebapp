const rotue = require('express').Router();
const Inquiry = require("../module/inquiry.module")


// Change the route definition to an async function
rotue.post('/add_inquiry', async (req, res) => {
    try {
        const inquiry = req.body;

        // Use await with Model.create to handle the promise it returns
        const createdInquiry = await Inquiry.create(inquiry);

        res.status(201).json({
            message: 'Inquiry added successfully',
            data: createdInquiry, // Optionally send back the created data
        });
    } catch (error) {
        console.error('Error adding inquiry:', error);
        res.status(500).json({
            message: 'An error occurred while adding the inquiry',
        });
    }
});


module.exports = rotue
