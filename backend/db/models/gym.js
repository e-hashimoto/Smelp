'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gym = sequelize.define('Gym', {
    title: {
      type: DataTypes.STRING(55),
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    sponsoredBy: {
      type: DataTypes.INTEGER
    }
  }, {});
  Gym.associate = function(models) {
    // associations can be defined here
    Gym.hasMany(models.Review, {foreignKey: 'gymId'});
    Gym.belongsTo(models.Brand, {foreignKey: 'brandId'});
  };
  return Gym;
};
