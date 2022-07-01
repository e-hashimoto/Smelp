'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Rackets', [
    {
      name: 'Astrox 88 S Pro',
      brandId: 1,
      description: 'Flex: Stiff - Frame: HM Graphite / VOLUME CUT RESIN / Tungsten - Shaft Composition: HM Graphite / Namd - Joint: NEW Built-in T-Joint -Length	5 mm longer - Weight/Grip	4U(Avg. 83g)G5,6/3U(Avg. 88g)G4,5,6 - Stringing Advice 4U: 20-28 lbs, 3U: 21-29 lbs - Color(s): Emerald Blue',
      userId: 1
    },
    {
      name: 'Astrox 99 Pro',
      brandId: 1,
      description: 'Flex: Stiff - Frame: HM Graphite / VOLUME CUT RESIN / Tungsten - Shaft Composition: HM Graphite / Namd - Joint: NEW Built-in T-Joint -Length	10 mm longer - Weight/Grip 4U(Avg. 83g)G5,6/3U(Avg. 88g)G4,5,6 - Stringing Advice 4U: 20-28 lbs, 3U: 21-29 lbs - Color(s): White Tiger, Cherry Sunburst',
      userId: 1
    },
    {
      name: 'Aeronaut 9000C',
      brandId: 3,
      description: 'Flex: Medium - Material: Military Grade carbon Fiber - Length	675 mm - Weight/Grip 85-89 grams / S1 (3 1/8") - Stringing Advice 31: lbs maximum - Color(s): Red/Blue',
      userId: 1
    },
    {
      name: 'MX9 Green',
      brandId: 2,
      description: 'Flex: Medium - Frame: High tension capacity ISO frame, 100% graphite 1 piece construction - Weight/Grip	82 grams - Color(s): Green',
      userId: 1
    },
    {
      name: 'Astrox 100ZZ',
      brandId: 1,
      description: 'Flex: Extra Stiff - Frame: HM Graphite / Namd / Tungsten / Black Micro Core / Nanometric - Shaft Composition: HM Graphite / Namd - Joint: NEW Built-in T-Joint - Length: 10 mm longer - Weight/Grip 4U (Avg.83g) G5, 6 / 3U (Avg.88g) G4, 5, 6 - Stringing Advice: 4U: 20 - 28 lbs, 3U: 21 - 29 lbs - Color(s): Kurenai, Dark Navy',
      userId: 1
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Rackets', null, {});
  }
};
