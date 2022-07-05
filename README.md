# Smelp

Smelp is the beginning of a badminton database for not just badminton clubs across the nation, but for avid badminton users and newcomers to the sport alike to connect and share their experiences and thoughts about everything badminton.  As of now, the components only have a limited number of gyms, brands, and rackets.  But future plans are to move along the lines of a badminton-oriented Google-Facebook hybrid.  

# Technologies Used

- React
- Redux
- PostgreSQL
- Express.js
- Sequelize

# How to install project
## Setting Up and Starting a Local Server

1. Download code and npm install in /backend to install all node dependencies for backend server.

2. Create a psql db user with createdb privileges.

   - Duplicate the .env.example for the dotenv package.

   - Update the following variables:

     - PORT the port that the server will listen to, 8080 by default
     - DB_USERNAME the user of the created psql db user
     - DB_PASSWORD the password for the psql db user
     - SESSION_SECRET a session secret key for encrypting session id's in the database
       - All other variables should remain the same

3. Setup PostgreSQL database

   - Run npx dotenv sequelize db:create
   - Run npx dotenv sequelize db:migrate
   - Run npx dotenv sequelize db:seed:all

4. Start express server by running npm start in the /backend directory
5. The backend server will start on http://localhost:5000
6. Run `npm install` in `/frontend` to install dependencies for frontend server.
7. Run `npm start` in the `/frontend` directory
8. The frontend server will be live on http://localhost:3000 by default

# Link to live site 
(https://smelp.herokuapp.com/) Click here to access the live site!

# Wiki
(https://github.com/e-hashimoto/Smelp/wiki)

# Feature Page
(https://github.com/e-hashimoto/Smelp/wiki/Feature-List)

# DB Schema
<a href="https://i.imgur.com/PywnP33.png"><img src="https://i.imgur.com/PywnP33.png" title="source: imgur.com" /></a>

# Screenshots of the application

Here on the 'Gyms' page, we can see all of the gyms listed currently in the database, a form is rendered below to add a new gym.
![Gyms Page](https://i.imgur.com/hf0hKLE.png)

A specific gym.  Arizona Badminton Center is our example.
![Specific Gym - AZBC](https://imgur.com/bOT0klJ)

Testing the creation of a new gym to edit/delete.
![Test Gym](https://i.imgur.com/AX4RMuU.png)

Edit Gym Modal in action.
![Edit Gym Modal](https://i.imgur.com/ovWHov8.png)

Before and after deletion of a gym.
![Before](https://i.imgur.com/ERcmUqa.png)
![After](https://i.imgur.com/HO1OnD1.png)

Rackets list and add form.
![Rackets](https://i.imgur.com/vFmBURe.png)

Individual test racket.
![Test Racket](https://i.imgur.com/V7tyHmU.png)

Before and after deletion of a racket.
![Before](https://i.imgur.com/IeLrXKu.png)
![After](https://i.imgur.com/Q4qxT4M.png)

Smelp 404
![404](https://i.imgur.com/mMUK25q.png)
