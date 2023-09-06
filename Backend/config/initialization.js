const sequelize = require("../config/database"); // Adjust the path as needed
require("./associations");

const synchronizeModels = async () => {
  try {
    // Sync all defined models with the database
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
};

module.exports = synchronizeModels;
