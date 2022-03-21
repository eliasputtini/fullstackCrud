require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

const routes = require("./routes/dev");
const levelRoutes = require("./routes/level");

app.use("/api", routes);
app.use("/api", levelRoutes);

const PORT = process.env.PORT || 5000;

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
