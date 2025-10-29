// D:\API-Midterm-Beng\server.js (Updated)

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const apiRouter = require('./routes/apiRoute');
const venueRouter = require('./routes/venues');
const attendeeRouter = require('./routes/attendees');
const eventRouter = require('./routes/events');

app.use('/', apiRouter);
app.use('/venues', venueRouter);
app.use('/attendees', attendeeRouter);
app.use('/events', eventRouter);

app.listen(port, () => console.log(`Server started on available endpoints:
    http://localhost:${port}/
    http://localhost:${port}/students
    http://localhost:${port}/courses
    http://localhost:${port}/venues
    http://localhost:${port}/attendees
    http://localhost:${port}/events
`));