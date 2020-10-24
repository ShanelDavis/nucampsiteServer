const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const partnerSchema = new Schema({
    name: {
        type: String,
        min: 1,
        max: 20,
        required: true
    },
    image: {
        type: Image,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    }
}, {
    description: {
        type: String,
        required: true
    }
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;