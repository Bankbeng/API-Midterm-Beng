// D:\API-Midterm-Beng\models\event.js

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    // Relationship to Venue
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue', 
        required: true
    },
    // Relationship to Attendees
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendee'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);