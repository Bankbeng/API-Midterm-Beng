// D:\API-Midterm-Beng\routes\events.js

const express = require('express');
const router = express.Router();

// --- IMPORT MOCK DATA from other files (Requires correct path!) ---
// NOTE: For simplicity, we'll redefine the mock data here, 
// but in a real project, you'd import it.

const mockVenues = [
    { _id: 'v1', name: 'Grand Ballroom', address: '100 Event Lane', capacity: 1000 },
    { _id: 'v2', name: 'Small Conference Room', address: '200 Meeting St', capacity: 50 }
];
const mockAttendees = [
    { _id: 'a1', name: 'Alice Johnson', email: 'alice@test.com' },
    { _id: 'a2', name: 'Bob Smith', email: 'bob@test.com' }
];

// --- MOCK DATA (Simulates the Events collection) ---
// Note the 'venue' and 'attendees' fields use the mock IDs
const mockEvents = [
    { 
        _id: 'e1', 
        title: 'Tech Conference 2025', 
        date: '2025-12-01T10:00:00Z', 
        capacity: 1000, 
        venue: 'v1',          // Venue ID reference
        attendees: ['a1', 'a2'] // Attendee ID references
    }
];

// --- HELPER FUNCTION: Simulates Mongoose .populate() ---
function populateEvent(event) {
    // 1. Find the Venue object and replace the ID with the object
    const venueDetail = mockVenues.find(v => v._id === event.venue);
    
    // 2. Find the Attendee objects and replace the IDs with the array of objects
    const attendeeDetails = event.attendees.map(attendeeId => {
        return mockAttendees.find(a => a._id === attendeeId);
    });

    return {
        ...event, // Copy all event fields
        venue: venueDetail, // Replace venue ID with object
        attendees: attendeeDetails // Replace ID array with object array
    };
}

// --- ROUTES ---

// GET /events (Get All)
router.get('/', (req, res) => {
    // Populate all mock events before sending
    const populatedEvents = mockEvents.map(populateEvent);
    res.json(populatedEvents);
});

// GET /events/:id (Get One)
router.get('/:id', (req, res) => {
    const event = mockEvents.find(e => e._id === req.params.id);
    if (event == null) {
        return res.status(404).json({ message: 'Cannot find Event' });
    }
    // Populate the single event before sending
    res.json(populateEvent(event));
});

// POST /events/:eventId/register (Register an Attendee)
router.post('/:eventId/register', (req, res) => {
    const event = mockEvents.find(e => e._id === req.params.eventId);
    const attendeeId = req.body.attendeeId;
    
    if (!event || !mockAttendees.find(a => a._id === attendeeId)) {
        return res.status(404).json({ message: 'Event or Attendee not found' });
    }

    // Capacity Check
    if (event.attendees.length >= event.capacity) {
        return res.status(400).json({ message: 'Event is full' });
    }
    
    // Add the attendee ID to the mock data array
    if (!event.attendees.includes(attendeeId)) {
        event.attendees.push(attendeeId);
    }
    
    res.json(populateEvent(event));
});

module.exports = router;