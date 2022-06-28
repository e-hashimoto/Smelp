'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Rackets', [
    {
      name: 'Astrox 88 S Pro',
      brandId: '1',
      description: 'Flex: Stiff - Frame: HM Graphite / VOLUME CUT RESIN / Tungsten - Shaft Composition: HM Graphite / Namd - Joint: NEW Built-in T-Joint -Length	5 mm longer - Weight/Grip	4U(Avg. 83g)G5,6/3U(Avg. 88g)G4,5,6 - Stringing Advice 4U: 20-28 lbs, 3U: 21-29 lbs - Color(s): Emerald Blue',
    },
    {
      name: 'Astrox 88 S',
      brandId: '1',
      description: 'Flex: Stiff - Frame: HM Graphite / VOLUME CUT RESIN / Tungsten - Shaft Composition: HM Graphite / Namd - Joint: NEW Built-in T-Joint -Length	5 mm longer - Weight/Grip	4U(Avg. 83g)G5,6/3U(Avg. 88g)G4,5,6 - Stringing Advice 4U: 20-28 lbs, 3U: 21-29 lbs - Color(s): Emerald Blue',
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
