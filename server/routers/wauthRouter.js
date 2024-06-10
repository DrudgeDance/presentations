const express = require("express");
const wauthRouter = express.Router();

wauthRouter.post(
  "/",
  (req, res, next) => {
    // Check if the value in req.body is TSC2024 and set the cookie
    res.locals = (req.body !== "TSC2024") ? {
                                              authorized: false, 
                                              url: null
                                            } : 
                                            {
                                              authorized: true, 
                                              url: 'https://www.youtube.com/embed/live_stream?channel=UCMXjh78o_6pYrJn7ExPaGMw'
                                            };

    if (req.body === "TSC2024") {
      res.cookie("TheSciencingChallenge", "TSC2024", { secure: true, sameSite: 'Lax' });
    }
                                            

    console.log(req.body);
    return next();
  },
  (req, res) => {
    res.send(res.locals); // Adjusted to directly respond here for testing
  }
);

module.exports = wauthRouter;