import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({
  path: "./env", // If your file is named "env", not ".env"
});

const app = express();

// Connect to the database
connectDB();

// Your express setup (example)
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
