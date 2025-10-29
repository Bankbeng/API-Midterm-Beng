const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures no two attendees have the same email
    },
}, { timestamps: true });

module.exports = mongoose.model('Attendee', AttendeeSchema);