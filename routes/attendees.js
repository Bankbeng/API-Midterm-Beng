// D:\API-Midterm-Beng\routes\attendees.js

const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendeeController'); 

router.get('/', attendeeController.getAllAttendees);
router.get('/:id', attendeeController.getAttendeeById);
router.post('/', attendeeController.createAttendee);

module.exports = router;