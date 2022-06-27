'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    gymId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Gym, {foreignKey: 'gymId'});
    Review.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Review;
};
