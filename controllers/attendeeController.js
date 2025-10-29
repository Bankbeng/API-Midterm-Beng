// D:\API-Midterm-Beng\controllers\attendeeController.js

// --- MOCK DATA ---
const mockAttendees = [
    { _id: 'a1', name: 'Alice Johnson', email: 'alice@test.com' },
    { _id: 'a2', name: 'Bob Smith', email: 'bob@test.com' }
];

const getAllAttendees = (req, res) => {
    res.json(mockAttendees);
};

const getAttendeeById = (req, res) => {
    const attendee = mockAttendees.find(a => a._id === req.params.id);
    if (attendee == null) return res.status(404).json({ message: 'Cannot find Attendee' });
    res.json(attendee);
};

const createAttendee = (req, res) => {
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ message: "Missing required fields: name and email" });
    }
    const newAttendee = {
        _id: 'a' + (mockAttendees.length + 1),
        name: req.body.name,
        email: req.body.email,
    };
    mockAttendees.push(newAttendee);
    res.status(201).json(newAttendee);
};

module.exports = {
    getAllAttendees,
    getAttendeeById,
    createAttendee
};