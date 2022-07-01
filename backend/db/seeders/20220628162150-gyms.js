'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Gyms', [
    {
      title: 'Bay Club Carmel Valley',
      location: '12000 Carmel Country Road , San Diego CA 92130',
      description: 'Courts available: 3. Hours of operation: Wed: 7:30 pm - 10:00 pm; Fri: 7:00 pm - 10:00 pm. Bay Club Carmel Valley hosts open play badminton for beginning and experienced players. Our staff is available for tips and instruction, as well as private and group lessons. Open play is available on a first-come, first-served basis. One of our associates is usually on hand to help organize matches. Members of all skill levels are welcome to play, as are guests who have paid the guest fee. You may bring your own equipment or use racquets and shuttlecocks provided by the Club.',
      brandId: null,
      userId: 1
    },
    {
      title: 'UCSD Badminton',
      location: '9500 Gilman Dr., La Jolla CA 92093',
      description: 'Courts available: 6. Hours of operation: Mon, Thurs: 9:00 am - 11:00 am. https://recreation.ucsd.edu/',
      brandId: null,
      userId: 1
    },
    {
      title: 'Allied Gardens Recreation Center',
      location: '5155 Greenbrier Ave., San Diego CA 92120',
      description: 'Courts available: 3. Hours of operation: Tues, Thurs: 11:00 am - 2:00 pm. Beginner to advanced levels. No court reservation required. Rackets and birdies are available on site for check out. https://www.sandiego.gov/park-and-recreation/centers/recctr/allied',
      brandId: null,
      userId: 1
    },
    {
      title: 'San Diego Badminton Club',
      location: '5155 Greenbrier Ave., San Diego CA 92120',
      description: 'Courts available: 5. Hours of operation: Tues, Thurs: 11:00am - 9:30pm; Fri: 3:00pm - 8:30pm; Sat: 9:00am - 3:30pm; Sun: 12:00pm - 4:30pm. We encourage players of all ages and skill levels. Our membership is open to the general public, and highly reasonable dues of $80.00 per year, which works out to $6.67 per month. Our play facility, which is centrally located, has hard wood floors, dark walls, and the accessibility of 15 tournament courts as well as roll away bleachers for spectators. We are proudly affiliated with the United States Badminton Association and often sponsor USAB tournaments. We offer discounts on equipment and supplies to members. We have club courts reserved for members during badminton play hours which allows for higher efficiency in organizing games. We abide by the USAB and IBF rules and code of conduct.',
      brandId: null,
      userId: 1
    },
    {
      title: 'UCI Badminton Club',
      location: '680 California Ave., Irvine CA',
      description: 'Courts available: 6. Hours of operation: Tues: 9:00pm - 12:00am, Thurs: 6:00pm - 9:00pm, Sat: 10:00am - 1:00pm. We compete in the Southern California Collegiate Badminton League and our players participate in many tournaments throughout the year, including collegiate national championships. Our league is made up of the following universities: UCLA, UCSD, UCI, USC, UCD, UCR, UCSB, CSUN, CPP, CPSLO, CSUSB, and CSULB. In addition to those we also scrimmage against various other collegiate teams such as Standford, Berkeley, SJSU, SDSU, and FSU.',
      brandId: null,
      userId: 1
    },
    {
      title: 'South Coast Chinese Cultural Association Badminton Club',
      location: '9 Truman St., Irvine CA 92620',
      description: 'Courts available: 6. Hours of operation: Tues, Wed: 11:30am - 2:00pm (summer closed)l Thurs, Fri: 7:15pm - 9:45pm (7:00pm open for sign-in); Sat: 7:15pm - 9:45pm (6 courts available after 8:30pm; 7:00pm open for sign-in); Sun: 3:00pm - 6:00pm (6 courts available before 4:30pm, summer & some holidays). The 10,000 square-foot gymnasium has 6 six badminton courts and is equipped with NBA-standard hardwood floor courts. The gym is open to the public and everyone is welcome to play.',
      brandId: null,
      userId: 1
    },
    {
      title: 'Irvine Badminton Club',
      location: '5500 Irvine Center Dr., Irvine CA 92618',
      description: 'Courts available: 8. Hours of operation: Sat: 4:30pm - 6:30pm (youth programs), Sat: 6:30pm - 9:30pm; Sun: 1:00pm - 4:00pm. Irvine Badminton Club operates Saturdays and Sundays at Irvine Valley College. We have 8 clearly marked courts with wood floor and good lighting. Player level ranges from national to beginner. Free mixing of partners for doubles matches. New member rate is prorated, $4/day, plus registration fee $60; Sat: $8 for walk-in, Sun: $6 non-member, $4 member walk-in.',
      brandId: null,
      userId: 1
    },
    {
      title: 'Orange County B.C. (OCBC)',
      location: '1432-A N. Main Street, Orange CA 92867',
      description: 'Courts available: 12. Hours of operation: Mon - Fri: 1:00pm - 10:00pm, Sat - Sun: 1:00pm - 9:00pm. The Olympic Sport of Badminton is the fastest racquet sport in the world. Come see how badminton is truly played at the Orange County Badminton (OCBC). OCBC offers training for all levels, including elite youth training programs to develop future US Badminton Champions.',
      brandId: 1,
      userId: 1
    },
    {
      title: 'L.A. Badminton Club (LABC)',
      location: '10410 Valley Blvd., El Monte CA 91731',
      description: 'Courts available: 15. Hours of operation: Mon - Sun: 8:00am - 2:00am. LABC is the state of art badminton facility, which offers values, convenience and amenities beyond ordinary clubs. We always put in mind the comfort and excitement of our members. Our building, flooring, and lighting were planned and custom-built for badminton and comfort of every players of all levels.',
      brandId: 1,
      userId: 1
    },
    {
      title: 'Arizona Badminton Center (AZBC)',
      location: '2150 W Broadway, Suite 107, Mesa AZ 85202',
      description: 'Courts available: 15. Hours of operation: Mon - Sun: 8:00am - 2:00am. LABC is the state of art badminton facility, which offers values, convenience and amenities beyond ordinary clubs. We always put in mind the comfort and excitement of our members. Our building, flooring, and lighting were planned and custom-built for badminton and comfort of every players of all levels.',
      brandId: 2,
      userId: 1
    },
    {
      title: 'UA Badminton Club',
      location: '1400 E 6th St., Tucson AZ 85719',
      description: 'Courts available: 9. Hours of operation: Fri: 6:00pm - 10:00pm; Sun: 10:00am - 12:00pm. The badminton club at the UA is a recreational club for people of all levels.',
      brandId: 3,
      userId: 1
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Gyms', null, {});
  }
};
