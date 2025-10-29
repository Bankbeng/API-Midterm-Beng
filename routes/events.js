// D:\API-Midterm-Beng\routes\events.js

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

// Specific registration endpoint
router.post('/:eventId/register', eventController.registerAttendee);

module.exports = router;