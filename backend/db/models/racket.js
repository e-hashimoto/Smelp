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
    notableAthletes: {
      type: DataTypes.STRING,
    }
  }, {});
  Racket.associate = function(models) {
    // Racket.belongsTo(models.Brand, { foreignKey: 'brandId'});
    Racket.hasMany(models.Athlete, {foreignKey: 'racketId'});
  };
  return Racket;
};
