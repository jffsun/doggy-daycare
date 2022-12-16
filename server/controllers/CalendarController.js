const router = require("express").Router();
const service = require('../models/Service');
const moment = require('moment');


router.post("/create-event", async (req, res) => {
  
  // Event record will be defined in request body
  const service= Service(req.body)

  // Save event to database
  await service.save();

  // Send success status
  res.sendStatus(200);
})

router.post("/get-events", async (req, res) => {
  
  const service = await Event.find({

    // Find events where start date is greater than or equal to 
    start: { $gte: moment(req.query.start).toDate() },
    // And end end is less than or equal to
    end: { $lte: moment(req.query.end).toDate() },
  })

  // Send request event to user as response
  res.sendStatus(service);
});

module.exports = router;