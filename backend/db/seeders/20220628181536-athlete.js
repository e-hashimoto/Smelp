"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Athletes", [
      {
        name: 'Kento Momota',
        countryName: 'Japan',
        racketId: 2,
        accomplishments: 'BWF World Championships Gold Medalist (2018, 2019), Badminton Asia Championships Gold Medalist (2018, 2019), Total BWF All England Open Winner (2019), Total BWF World Tour Finals (2019), Dubai BWF World Super Series Finals Champion (2015)'
      },
      {
        name: 'Akane Yamaguchi',
        countryName: 'Japan',
        racketId: 5,
        accomplishments: 'BWF World Championships Gold Medalist (2021), Asian Games Bronze Medalist (2018), Badminton Asia Championships (2019), Total BWF All Engalnd Open Winner (2022), Dubai BWF World Super Series Finals Champion (2017)'
      },
      {
        name: 'Kevin Sanjaya Sukamuljo',
        countryName: 'Indonesia',
        racketId: 1,
        accomplishments: 'Asian Games Gold Medalist (2018), BWF All England Open Champion (2017, 2018), Dubai BWF World Super Series Finals Champion (2017)'
      },
      {
        name: 'Viktor Axelsen',
        countryName: 'Denmark',
        racketId: 5,
        accomplishments: 'Olympic Games Gold Medalist (2020), BWF World Championships Gold Medalist (2017), Badminton European Championships (2016, 2018, 2022), Dubai BWF World Tour Super Series Finals Champion (2016, 2017), Total BWF World Tour Finals Champion (2021), BWF All England Open Champion (2020, 2022)'
      },
      {
        name: 'Beiwen Zhang',
        countryName: 'USA',
        racketId: 5,
        accomplishments: 'Pan American Championships Gold Medalist (2021), India Open Champion (2018)'
      },
      {
        name: 'Guy Chadwick',
        countryName: 'USA',
        racketId: 4,
        accomplishments: "Member of the 1986 Thomas Cup team for USA, US Senior Nationals Men's Doubles Champion (2009), International Senior US Open Champion (2011)"
      },
      {
        name: 'Yuta Watanabe',
        countryName: 'Japan',
        racketId: 3,
        accomplishments: "Olympic Bronze Medalist - Mixed Doubles (2020), Asian Championships Gold Medalist - Men's Doubles (2018), All England Open Men's and Mixed Doubles Champion (2020, 2021 / 2018, 2021, 2022)"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Athletes", null, {});
  },
};
