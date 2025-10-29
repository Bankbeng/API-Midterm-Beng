// D:\API-Midterm-Beng\controllers\venueController.js

// --- MOCK DATA ---
const mockVenues = [
    { _id: 'v1', name: 'Grand Ballroom', address: '100 Event Lane', capacity: 1000 },
    { _id: 'v2', name: 'Small Conf Room', address: '200 Meeting St', capacity: 50 }
];

const getAllVenues = (req, res) => {
    res.json(mockVenues);
};

const getVenueById = (req, res) => {
    const venue = mockVenues.find(v => v._id === req.params.id);
    if (venue == null) return res.status(404).json({ message: 'Cannot find Venue' });
    res.json(venue);
};

const createVenue = (req, res) => {
    if (!req.body.name || !req.body.capacity) {
        return res.status(400).json({ message: "Missing required fields: name and capacity" });
    }
    const newVenue = {
        _id: 'v' + (mockVenues.length + 1),
        name: req.body.name,
        address: req.body.address || 'Unknown',
        capacity: req.body.capacity
    };
    mockVenues.push(newVenue);
    res.status(201).json(newVenue);
};

module.exports = {
    getAllVenues,
    getVenueById,
    createVenue
};