const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        iso3: String,
        iso2: String,
        numeric_code: String,
        phone_code: String,
        capital: String,
        currency: String,
        currency_name: String,
        currency_symbol: String,
        tld: String,
        native: String,
        region: String,
        subregion: String,
        nationality: String,
        timezones: [
            {
                zoneName: String,
                gmtOffset: String,
                gmtOffsetName: String,
                abbreviation: String,
                tzName: String
            }
        ],
        translations: {
            kr: String,
            pt_BR: String,
            pt: String,
            nl: String,
            hr: String,
            fa: String,
            de: String,
            es: String,
            fr: String,
            ja: String,
            it: String,
            cn: String,
            tr: String
        },
        latitude: String,
        longitude: String,
        emoji: String,
        emojiU: String
    }
)

const Country = mongoose.model('Country', countrySchema)

module.exports = Country;