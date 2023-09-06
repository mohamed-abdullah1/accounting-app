const Sequelize = require("sequelize");

const dbConnection = () => {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "Backend/config/DB/home_appliances.db", // Path to your SQLite database file here      E:\dev\Accounting Desktop app\Backend\config\database.js    Backend\config\database.js
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log(
        "Connection to the database has been established successfully."
      );
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  return sequelize;
};

module.exports = dbConnection();
