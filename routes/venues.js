// D:\API-Midterm-Beng\routes\venues.js

const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venueController'); 

router.get('/', venueController.getAllVenues);
router.get('/:id', venueController.getVenueById);
router.post('/', venueController.createVenue);

module.exports = router;