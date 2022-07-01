'use strict';
module.exports = (sequelize, DataTypes) => {
  const Athlete = sequelize.define('Athlete', {
    name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    countryName: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    racketId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accomplishments:{
      type: DataTypes.STRING(1024)
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Athlete.associate = function(models) {
    // associations can be defined here
    Athlete.belongsTo(models.Racket, {foreignKey: 'racketId'});
    Athlete.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Athlete;
};
