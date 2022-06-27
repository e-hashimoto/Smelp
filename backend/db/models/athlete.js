'use strict';
module.exports = (sequelize, DataTypes) => {
  const Athlete = sequelize.define('Athlete', {
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    racketId: DataTypes.INTEGER,
    accomplishments: DataTypes.STRING
  }, {});
  Athlete.associate = function(models) {
    // associations can be defined here
  };
  return Athlete;
};