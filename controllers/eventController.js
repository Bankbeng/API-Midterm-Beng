// D:\API-Midterm-Beng\controllers\eventController.js

// --- MOCK DATA (Copies of the other mock arrays for lookup) ---
const mockVenues = [
    { _id: 'v1', name: 'Grand Ballroom', address: '100 Event Lane', capacity: 1000 },
    { _id: 'v2', name: 'Small Conf Room', address: '200 Meeting St', capacity: 50 }
];
const mockAttendees = [
    { _id: 'a1', name: 'Alice Johnson', email: 'alice@test.com' },
    { _id: 'a2', name: 'Bob Smith', email: 'bob@test.com' }
];
const mockEvents = [
    { 
        _id: 'e1', 
        title: 'Tech Summit', 
        date: '2025-12-01T10:00:00Z', 
        capacity: 1000, 
        venue: 'v1',          // Reference ID
        attendees: ['a1', 'a2'] // Reference IDs
    }
];

// --- HELPER FUNCTION: Mocks Mongoose .populate() to show relationships ---
function populateEvent(event) {
    const venueDetail = mockVenues.find(v => v._id === event.venue);
    const attendeeDetails = event.attendees.map(attendeeId => {
        return mockAttendees.find(a => a._id === attendeeId);
    });

    return {
        ...event, 
        venue: venueDetail, // Replaces ID with object
        attendees: attendeeDetails // Replaces ID array with object array
    };
}

// --- CONTROLLER FUNCTIONS ---

const getAllEvents = (req, res) => {
    const populatedEvents = mockEvents.map(populateEvent);
    res.json(populatedEvents);
};

const getEventById = (req, res) => {
    const event = mockEvents.find(e => e._id === req.params.id);
    if (event == null) return res.status(404).json({ message: 'Cannot find Event' });
    res.json(populateEvent(event));
};

const registerAttendee = (req, res) => {
    const event = mockEvents.find(e => e._id === req.params.eventId);
    const attendeeId = req.body.attendeeId;
    
    if (!event || !mockAttendees.find(a => a._id === attendeeId)) {
        return res.status(404).json({ message: 'Event or Attendee not found' });
    }

    if (event.attendees.length >= event.capacity) {
        return res.status(400).json({ message: 'Event is full' });
    }
    
    if (!event.attendees.includes(attendeeId)) {
        event.attendees.push(attendeeId);
    }
    
    res.json(populateEvent(event));
};

module.exports = {
    getAllEvents,
    getEventById,
    registerAttendee
};