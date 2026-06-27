const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Route/user.Route.js");
const ProductRoute = require("./Route/ProductRoute.js");

const index = express();
const PORT = process.env.PORT;

index.use(express.json());
index.use("/api/auth", userRoute);
index.use("/api/product", ProductRoute);
index.get("/", (req, res, next) => {
  res.send("hello welcome to Okim's app");
});

index.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to OKIM'S MongoDB"))
  .catch((error) => console.error(" MongoDB connection error:", error));
