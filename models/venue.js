// D:\API-Midterm-Beng\models\venue.js

const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
}, { timestamps: true });

module.exports = mongoose.model('Venue', venueSchema);