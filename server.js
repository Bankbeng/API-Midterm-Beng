// D:\API-Midterm-Beng\server.js (Updated)

const express = require('express');
const app = express();
const port = 3000; // Using a fixed port

app.use(express.json());

const venueRouter = require('./routes/venues');
const attendeeRouter = require('./routes/attendees');
const eventRouter = require('./routes/events');

app.use('/venues', venueRouter);
app.use('/attendees', attendeeRouter);
app.use('/events', eventRouter);

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));