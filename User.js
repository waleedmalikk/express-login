//this is sequelize model file that represents the table in my database.
const Sequelize = require("sequelize");

const db = require("./database");

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
