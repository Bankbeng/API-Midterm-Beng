// D:\API-Midterm-Beng\server.js (Changes)

// You may need this if you use .env for PORT, otherwise remove
// require('dotenv').config(); 

const express = require('express');
const app = express();
// Using a hardcoded port 3000 since we're not using dotenv for secrets right now
const port = 3000; 

// =========================================================
// Mongoose/MongoDB Connection (MUST BE COMMENTED OUT/REMOVED)
// =========================================================
/*
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to Database'))
    .catch(err => console.error(err));
*/

app.use(express.json());

// =========================================================
// ROUTE IMPORTS (Ensure these are correctly mapped)
// =========================================================
const venueRouter = require('./routes/venues');
const attendeeRouter = require('./routes/attendees');
const eventRouter = require('./routes/events');

app.use('/venues', venueRouter);
app.use('/attendees', attendeeRouter);
app.use('/events', eventRouter);

// =========================================================
// START SERVER
// =========================================================
app.listen(port, () => console.log(`Server started on port ${port}`));