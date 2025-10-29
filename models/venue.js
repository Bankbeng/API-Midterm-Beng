const mongoose = require('mongoose');

// Define the schema for the Venue
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
        min: 1 // Capacity must be a positive number
    },
    // The timestamp fields are added automatically by Mongoose
}, { timestamps: true });

// Export the model, which will create the 'venues' collection in MongoDB
module.exports = mongoose.model('Venue', venueSchema);