const router = require("express").Router();
const event = require('../models/Event');
const moment = require('moment');


router.post("/create-event", async (req, res) => {
  
  // Event record will be defined in request body
  const event= Event(req.body)

  // Save event to database
  await event.save();

  // Send success status
  res.sendStatus(200);
})

router.post("/get-events", async (req, res) => {
  
  const events = await Event.find({

    // Find events where start date is greater than or equal to 
    start: { $gte: moment(req.query.start).toDate() },
    // And end end is less than or equal to
    end: { $lte: moment(req.query.end).toDate() },
  })

  // Send request event to user as response
  res.sendStatus(events);
});

module.exports = router;