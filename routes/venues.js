// D:\API-Midterm-Beng\routes\venues.js

const express = require('express');
const router = express.Router();

// --- MOCK DATA (Simulates the Venues collection) ---
const mockVenues = [
    { _id: 'v1', name: 'Grand Ballroom', address: '100 Event Lane', capacity: 1000 },
    { _id: 'v2', name: 'Small Conference Room', address: '200 Meeting St', capacity: 50 }
];

// --- ROUTES ---

// GET /venues (Get All)
router.get('/', (req, res) => {
    // Returns the mock array instead of running Venue.find()
    res.json(mockVenues);
});

// GET /venues/:id (Get One)
router.get('/:id', (req, res) => {
    const venue = mockVenues.find(v => v._id === req.params.id);
    if (venue == null) {
        return res.status(404).json({ message: 'Cannot find Venue' });
    }
    res.json(venue);
});

// POST /venues (Create)
router.post('/', (req, res) => {
    // Simulates creating a new venue and assigning an ID
    const newVenue = {
        _id: 'v' + (mockVenues.length + 1), 
        name: req.body.name,
        address: req.body.address,
        capacity: req.body.capacity
    };
    mockVenues.push(newVenue);
    res.status(201).json(newVenue);
});

// For this mock environment, you can skip PATCH and DELETE, 
// but if you include them, they should return a success message.

module.exports = router;