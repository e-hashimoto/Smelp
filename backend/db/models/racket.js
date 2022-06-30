'use strict';
module.exports = (sequelize, DataTypes) => {
  const Racket = sequelize.define('Racket', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Racket.associate = function(models) {
    Racket.belongsTo(models.Brand, { foreignKey: 'brandId'});
    Racket.belongsTo(models.User, {foreignKey: 'userId'});
    Racket.hasMany(models.Athlete, {foreignKey: 'racketId'});
  };
  return Racket;
};
