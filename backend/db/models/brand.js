'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brands', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notableAthletes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Brand.associate = function(models) {
    // associations can be defined here
    Brand.hasMany(models.Gym, { foreignKey: 'brandId'});
    Brand.hasMany(models.Racket, { foreignKey: 'brandId'});
  };
  return Brand;
};
