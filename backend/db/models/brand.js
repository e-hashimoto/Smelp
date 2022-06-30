'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brands', {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    notableAthletes: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Brand.associate = function(models) {
    // associations can be defined here
    Brand.hasMany(models.Gym, { foreignKey: 'brandId'});
    Brand.hasMany(models.Racket, { foreignKey: 'brandId'});
    Brand.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Brand;
};
