'use strict';
module.exports = (sequelize, DataTypes) => {
  const Racket = sequelize.define('Racket', {
    name: DataTypes.STRING,
    brandId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    notableAthletes: DataTypes.STRING
  }, {});
  Racket.associate = function(models) {
    // associations can be defined here
  };
  return Racket;
};