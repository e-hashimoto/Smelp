'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Brands', [
    {
      name: 'Yonex',
      country: 'Japan',
      description: 'What started out as a fishing company outmodded after World War II, Yonex is the #1 sponsor of international tournaments and national teams.  See the link for more details --> https://www.yonex.com/about-us',
      notableAthletes: 'Kento Momota -- Akane Yamaguchi -- Kevin Sanjaya Sukamuljo -- Viktor Axelsen -- Beiwen Zhang'
    },
    {
      name: 'HL Badminton',
      country: 'USA',
      description: 'HL was born in 1973 as HL International Sports. It started with one product, the HL Champion feather Shuttlecock. This very special product instantly became the industry standard and the #1 choice for local, regional, national, and international tournaments all over the Western Hemisphere for the next 20 years! The HL Champion’s legacy continues with HL Badminton’s tournament quality feather shuttle, the Pro Tour PT-60 Shuttlecock. See more: https://www.hlbadminton.com/about-hl-badminton/',
      notableAthletes: 'Guy Chadwick: Owner of Arizona Badminton Center'
    },
    {
      name: 'Li-Ning',
      country: 'China',
      description: 'Li-Ning is the Chinese leader in athletic apparel and footwear, rooted in the vision of its founder and namesake, the champion gymnast Mr. Li Ning. He founded the company in 1990 with the simple goal of providing Chinese athletes a national brand to wear on the world stage of the Olympics – historically one of the West’s rare portals into authentic Chinese culture. See more: https://en.lining.com/',
      notableAthletes: 'Yuta Watanabe',
    }
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
