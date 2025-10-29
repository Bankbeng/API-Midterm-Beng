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
    // --- RELATIONSHIP FIELD 1: ONE-TO-ONE/FEW (Venue) ---
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue', // Links to the Venue model
        required: true
    },
    // --- RELATIONSHIP FIELD 2: ONE-TO-MANY (Attendees) ---
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendee' // Links to the Attendee model
    }]
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);