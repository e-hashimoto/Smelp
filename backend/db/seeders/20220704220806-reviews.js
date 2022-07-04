"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          gymId: 1,
          userId: 1,
          title: 'Nice place in San Diego',
          rating: 5,
          description: 'Pretty chill place to place in San Diego.  Location is a bit wonky, but overall, not too bad.'
        },
        {
          gymId: 10,
          userId: 1,
          title: 'Only place in AZ',
          rating: 4,
          description: 'This is the only place in Arizona that is designated just for badminton.  Courts could be nicer, but overall, best place to play out here.'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Reviews', null, {});
  },
};
