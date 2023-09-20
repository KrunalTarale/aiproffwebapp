const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
    {
        fname : String,
        lname: String,
        country : String,
        contact : String,
        state : String,
        city : String,
        help : String,
        massage : String
    }
)

const Inquiry = mongoose.model('Inquiry', inquirySchema)

module.exports = Inquiry;

