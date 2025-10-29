// D:\API-Midterm-Beng\models\attendee.js

const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Attendee', AttendeeSchema);