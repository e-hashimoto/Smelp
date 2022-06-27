'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Gyms', [
    {
     location: '14640 Tierra Bonita Rd., Poway CA 92064',
     title: 'Twin Peaks Multipurpose Center',
     description: 'Free drop-in fee; middle school gym',
     sponsoredBy: null
    },
    {
      location: '9500 Gilman Dr., La Jolla CA 92093',
      title: 'UCSD Badminton',
      description: 'https://recreation.ucsd.edu/',
      sponsoredBy: 'Nike, Under Armour'
     },
     {
      location: '3420 Camino De Los Coches, Carlsbad CA 92009',
      title: 'Stagecoach Community Park',
      description: 'Without I.D. you will not be able to participate, no exceptions! Must be 18 years old or older to participate in adult open play. Participants Must Have Exact Change',
      sponsoredBy: null
     },
     {
      location: '12000 Carmel Country Road , San Diego CA 92130',
      title: 'Bay Club Carmel Valley',
      description: 'Bay Club Carmel Valley hosts open play badminton for beginning and experienced players. Our staff is available for tips and instruction, as well as private and group lessons. Open play is available on a first-come, first-served basis. One of our associates is usually on hand to help organize matches. Members of all skill levels are welcome to play, as are guests who have paid the guest fee. You may bring your own equipment or use racquets and shuttlecocks provided by the Club.',
      sponsoredBy: null
     },
     {
      location: '8810 Judicial Drive, San Diego CA 92122',
      title: 'Nobel Athletic Fields And Recreation Center',
      description: 'Only one court available; http://www.sandiego.gov/',
      sponsoredBy: null
     },
     {
      location: '1140 Oakcrest Park Dr., Encinitas CA 92024',
      title: 'Encinitas Community Center',
      description: '4 courts available.  The gym is only available only on Sunday from 12:00 pm to 2:00 pm',
      sponsoredBy: null
     },
     {
      location: '2245 E. Valley Parkway, Escondido CA 92027',
      title: 'East Valley Community Center',
      description: 'All open gym participants must have an EVCC Gym ID card for entrance. Cards have a one-time fee of $5 and include one entrance. $2 per person per visit with current EVCC Gym ID card',
      sponsoredBy: null
     },
     {
      location: '9353 Oviedo St., San Diego CA 92129',
      title: 'Black Mountain Multipurpose Center',
      description: 'Open only on Wed and Fri from 6:45 pm - 9:15 pm and 6:00 pm to 9:15 pm respectively.',
      sponsoredBy: null
     },
     {
      location: '8175 Regents Rd., San Diego CA 92122',
      title: 'Doyle Recreation Center',
      description: '3 courts available, hours of operation are only on Saturday from 9:15 pm to 12:15 pm',
      sponsoredBy: null
     },
     {
      location: '5155 Greenbrier Ave., San Diego CA 92120',
      title: 'Allied Gardens Recreation Center',
      description: 'Beginner to advanced levels. No court reservation required. Rackets and birdies are available on site for check out.',
      sponsoredBy: null
     },
     {
      location: '777 W. Valley Blvd., Colton CA 92324',
      title: 'Colton High School Gym',
      description: 'Fees: $2 per person, 3 courts available',
      sponsoredBy: null
     },
     {
      location: '2145 Park Boulevard, San Diego CA 92101',
      title: 'San Diego Badminton Club',
      description: 'We encourage players of all ages and skill levels. Our membership is open to the general public, and highly reasonable dues of $80.00 per year, which works out to $6.67 per month. Our play facility, which is centrally located, has hard wood floors, dark walls, and the accessibility of 15 tournament courts as well as roll away bleachers for spectators. We are proudly affiliated with the United States Badminton Association and often sponsor USAB tournaments. We offer discounts on equipment and supplies to members. We have club courts reserved for members during badminton play hours which allows for higher efficiency in organizing games. We abide by the USAB and IBF rules and code of conduct. Hours of operation: Tues, Thurs: 11:00am - 9:30pm; Fri: 3:00pm - 8:30pm; Sat: 9:00am - 3:30pm; Sun: 12:00pm - 4:30pm',
      sponsoredBy: null
     },
     {
      location: '680 California Ave., Irvine CA 92617',
      title: 'UCI Badminton Club',
      description: 'We compete in the Southern California Collegiate Badminton League and our players participate in many tournaments throughout the year, including collegiate national championships. Our league is made up of the following universities: UCLA, UCSD, UCI, USC, UCD, UCR, UCSB, CSUN, CPP, CPSLO, CSUSB, and CSULB. In addition to those we also scrimmage against various other collegiate teams such as Standford, Berkeley, SJSU, SDSU, and FSU. Hours of operation: Tues: 9:00pm - 12:00am, Thurs: 6:00pm - 9:00pm, Sat: 10:00am - 1:00pm. 6 courts available. Tournament Grade Feather Birds provided; Club Shirt; Training from Experienced Coaches; League Participation and Traveling; End of the Year Banquet.',
      sponsoredBy: null
     },
     {
      location: '9 Truman St., Irvine, CA 92620',
      title: 'South Coast Chinese Cultural Association Badminton Club (SCCCA BC)',
      description: 'The 10,000 square-foot gymnasium has 6 six badminton courts and is equipped with NBA-standard hardwood floor courts. The gym is open to the public and everyone is welcome to play. Hours of operation: Tues, Wed: 11:30am - 2:00pm (summer closed)l Thurs, Fri: 7:15pm - 9:45pm (7:00pm open for sign-in); Sat: 7:15pm - 9:45pm (6 courts available after 8:30pm; 7:00pm open for sign-in); Sun: 3:00pm - 6:00pm (6 courts available before 4:30pm, summer & some holidays)',
      sponsoredBy: null
     },
     {
      location: '24232 Calle Aragon, Laguna Woods CA 92637',
      title: 'Laguna Woods Badminton Club',
      description: '3 courts available.  Hours of operation: Mon - Fri: 7:30am - 9:00am; Sat - Sun: 9:00am - 12:00 noon',
      sponsoredBy: null
     },
     {
      location: '13641 Deodara Dr., Garden Grove CA',
      title: 'Garden Grove Badminton Club',
      description: '6 courts available.  $5 entry fee, and only open Sat 6:00 pm to 10:00 pm',
      sponsoredBy: null
     },
     {
      location: '5500 Irvine Center Dr., Irvine CA 92618',
      title: 'Irvine Badminton Club',
      description: 'Irvine Badminton Club operates Saturdays and Sundays at Irvine Valley College. We have 8 clearly marked courts with wood floor and good lighting. Player level ranges from national to beginner. Free mixing of partners for doubles matches. Hours of operation: Sat 4:30 pm - 6:30 pm (youth programs), 6:30 pm - 9:30 pm; Sun 1:00 pm - 4:00 pm. New member rate is prorated, $4/day, plus registration fee $60; Sat: $8 for walk-in, Sun: $6 non-member, $4 member walk-in',
      sponsoredBy: null
     },
     {
      location: '13641 Deodara Dr., Garden Grove CA 92844',
      title: 'Garden Grove Sports & Recreation Center',
      description: '6 courts available. Thurs: 6:00pm - 9:00pm (Jan-May, Sep-Nov); Sun: 5:00pm - 8:00pm Fees: Youth (0-14 yrs): $1, Teen (15-17 yrs): $2, Adult (18-55 yrs): $3, Senior (55+ yrs): $2',
      sponsoredBy: null
     },
     {
      location: '1432-A N. Main Street, Orange CA 92867',
      title: 'Orange County B.C. (OCBC)',
      description: 'The Olympic Sport of Badminton is the fastest racquet sport in the world. Come see how badminton is truly played at the Orange County Badminton (OCBC). OCBC offers training for all levels, including elite youth training programs to develop future US Badminton Champions. 12 courts. Adult: Initiation Fee $125.00, Monthly Dues $60.00, Annual Dues $648.00; Spouse/Senior (over 54 yrs.): Initiation Fee $100.00, Monthly Dues $50.00, Annual Dues $540.00',
      sponsoredBy: null
     },
     {
      location: '9255 Telstar Ave., El Monte CA 91731',
      title: 'Woodshots Badminton Club',
      description: 'Since 2006, a volunteer based group of badminton enthusiasts (now known as WSBC), has been promoting the sport of badminton for youth and adults alike in the local communities of Southern California with the goals of encouraging the ideals of good sportsmanship, honesty, loyalty, courage and respect as well as promoting physical activity through sports competitions. We hope to be a premier organization in Southern California that provides opportunities for youth badminton sport programs.',
      sponsoredBy: null
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
