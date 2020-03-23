'use strict';
module.exports = (sequelize, DataTypes) => {
  let models = sequelize.Sequelize.Model
  class Report extends models{}
  Report.init({
    cases: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {sequelize})
  // const Report = sequelize.define('Report', );
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.Country)
    // Report.hasOne(models.User)
  };
  return Report;
};