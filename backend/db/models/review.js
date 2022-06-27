'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    gymId: {
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Gym, { foreignKey: 'gymId'});
    Review.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Review;
};
