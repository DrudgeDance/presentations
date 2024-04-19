const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authJWT = require("./middleware/authJWT");
const authRouter = require("./routers/authRouter.js");
const apiRouter = require("./routers/apiRouter.js");
const userPlantRouter = require("./routers/userPlantRouter.js");
const userController = require("./controllers/userController");
const userPlantController = require("./controllers/userPlantController");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Serve static files
app.use(express.static(path.join(__dirname, "../client/public")));

// Server Index || Client build path
app.use("/build", express.static(path.join(__dirname, "../client/dist")));

app.use("/auth", authRouter);

app.use("/api", apiRouter);

app.use("/api/user", userPlantRouter);

app.get("/api/user/plants", authJWT, userPlantController.getUserPlants, (req, res) => {
  return res.status(200).json(res.locals.plants);
});

app.get("*", (req, res) => {
  res.sendFile("../client/dist/index.html", { root: __dirname });
});

// Listening on env port
app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
