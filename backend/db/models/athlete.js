'use strict';
module.exports = (sequelize, DataTypes) => {
  const Athlete = sequelize.define('Athlete', {
    name: DataTypes.STRING,
    countryName: DataTypes.STRING,
    racketId: DataTypes.INTEGER,
    accomplishments: DataTypes.STRING
  }, {});
  Athlete.associate = function(models) {
    // associations can be defined here
  };
  return Athlete;
};
