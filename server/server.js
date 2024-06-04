const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const authJWT = require("./middleware/authJWT");
const authRouter = require("./routers/authRouter.js");
const userController = require("./controllers/userController");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, "../client/dist")));

// Server Index || Client build path
app.use("/", express.static(path.join(__dirname, "./../client/dist")));

app.use("/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Listening on env port
app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});