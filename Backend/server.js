const express = require("express");
const path = require("path");
const app = require("./app.js");
const synchronizeModels = require("./config/initialization");
const insertDemoData = require("./config/insertDemoData.js"); // Import the insertDemoData function

// Synchronize models and insert demo data
(async () => {
  await synchronizeModels();
  // await insertDemoData();
})();
const PORT = process.env.PORT || 6661;

// Serve your frontend build (dist) statically
app.use(express.static(path.join(__dirname, "../dist")));

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
