'use strict';
module.exports = (sequelize, DataTypes) => {
  let models = sequelize.Sequelize.Model
  class User extends models{}

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize})
  // const User = sequelize.define('User', );
  User.associate = function(models) {
    // associations can be defined here
    // User.hasOne(models.Report)
  };
  return User;
};