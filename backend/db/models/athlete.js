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
    }
  }, {});
  Athlete.associate = function(models) {
    // associations can be defined here
    Athlete.belongsTo(models.Racket, {foreignKey: 'racketId'})
  };
  return Athlete;
};
