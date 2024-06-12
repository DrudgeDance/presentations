const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const wauthRouter = require("./routers/wauthRouter.js");

require("dotenv").config();

const PORT = process.env.PORT || 80;
const app = express();

app
  .use(express.json())  // For parsing JSON bodies
  .use(express.text())  // For parsing text bodies
  .use(cookieParser())

// Serve static files
  .use(express.static(path.join(__dirname, "../client/dist_prod")))

// Server Index || Client build path
  .use("/", express.static(path.join(__dirname, "./../client/dist_prod")))
  .use("/wauth", wauthRouter)  // Use wauthRouter
  .get("*", 
    (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist_prod/index.html"));
    }
  )

// Listening on env port
  .listen(PORT, 
    () => {
      console.log("Server started on PORT:", PORT);
    }
  );