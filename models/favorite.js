const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite; 