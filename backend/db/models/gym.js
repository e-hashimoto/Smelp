'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gym = sequelize.define('Gym', {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 256]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 128]
      }
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [0, 2048]
      }
    },
  }, {});
  Gym.associate = function(models) {
    // associations can be defined here
    Gym.hasMany(models.Review, { foreignKey: 'gymId'})
  };
  return Gym;
};
