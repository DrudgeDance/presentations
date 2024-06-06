const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const authJWT = require("./middleware/authJWT");
const authRouter = require("./routers/authRouter.js");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();


app
  .use(express.json())
  .use(cookieParser())

// Serve static files
  .use(express.static(path.join(__dirname, "../client/dist")))

// Server Index || Client build path
  .use("/", express.static(path.join(__dirname, "./../client/dist")))
  .use("/auth", authRouter)
  .get("*", 
    (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    }
  )

// Listening on env port
  .listen(PORT, 
    () => {
      console.log("Server started on PORT:", PORT);
    }
  );