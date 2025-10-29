// D:\API-Midterm-Beng\routes\attendees.js

const express = require('express');
const router = express.Router();

// --- MOCK DATA (Simulates the Attendees collection) ---
const mockAttendees = [
    { _id: 'a1', name: 'Alice Johnson', email: 'alice@test.com' },
    { _id: 'a2', name: 'Bob Smith', email: 'bob@test.com' }
];

// --- ROUTES ---

// GET /attendees (Get All)
router.get('/', (req, res) => {
    res.json(mockAttendees);
});

// GET /attendees/:id (Get One)
router.get('/:id', (req, res) => {
    const attendee = mockAttendees.find(a => a._id === req.params.id);
    if (attendee == null) {
        return res.status(404).json({ message: 'Cannot find Attendee' });
    }
    res.json(attendee);
});

// POST /attendees (Create)
router.post('/', (req, res) => {
    const newAttendee = {
        _id: 'a' + (mockAttendees.length + 1),
        name: req.body.name,
        email: req.body.email,
    };
    mockAttendees.push(newAttendee);
    res.status(201).json(newAttendee);
});

module.exports = router;