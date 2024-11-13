import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables
dotenv.config({
  path: "./env", // If your file is named "env", not ".env"
});

const PORT = process.env.PORT || 5000;
// Connect to the database
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connction is failded", err);
  });
