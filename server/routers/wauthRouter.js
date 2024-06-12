const express = require("express");
const wauthRouter = express.Router();

wauthRouter.post(
  "/",
  (req, res, next) => {
    // Convert req.body to lowercase
    const lowerCaseBody = req.body.toLowerCase();

    // Check the modified value and set the cookie and URL appropriately
    res.locals = (lowerCaseBody !== "rck2009" && lowerCaseBody !== "tsc2024") ? {
                                              authorized: false, 
                                              url: null
                                            } : 
                                            {
                                              authorized: true, 
                                              url: lowerCaseBody === "rck2009" ? 
                                                   'https://www.youtube.com/embed/dQw4w9WgXcQ?si=XuLgEojzREGIpdOa' :  // URL for rck2009
                                                   'https://www.youtube.com/embed/live_stream?channel=UCMXjh78o_6pYrJn7ExPaGMw'  // URL for tsc2024
                                            };

    if (lowerCaseBody === "rck2009" || lowerCaseBody === "tsc2024") {
      res.cookie("TheSciencingChallenge", lowerCaseBody, { secure: true, sameSite: 'Lax' });
    }

    console.log(req.body);
    return next();
  },
  (req, res) => {
    res.send(res.locals); // Adjusted to directly respond here for testing
  }
);

module.exports = wauthRouter;