// import { NavLink } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div>
      <div>
        <h1 className="title">Smelp</h1>
      </div>
      <div className="about-Smelp">
        <h2>What Smelp Aims to do</h2>
        <p>
          Smelp aims to bring together all levels, newcomers and enthusiasts
          alike, to enjoy the sport of badminton to the fullest in North
          America. We aim to compile a list of all venues available to play the
          sport regardless if they consist of international regulated mats and
          other construction, or have taped down lines at a local elementary
          school. Future endeavors aim to essentially become a database spliced
          from Yelp, Google, and Facebook, so that users can connect, discuss,
          and share anything and everything badminton related on the continent.
        </p>
      </div>
      <div className="about-me">
        <h2>About the Owner</h2>
        <p>
          Exequiel "Zeke" Hashimoto was introduced to the sport by his parents
          some 14 years ago. Coming from a pair of highschool sweethearts who
          met on their local San Diego high school badminton team, Hashimoto
          continues to fill a vast majority of his spare time watching, playing,
          coaching, or visualizing badminton throughout the day. Currently
          resides in Arizona, he frequents Arizona Badminton Center (AZBC),
          helping to develop the next generation of juniors with his father as
          coaches.
        </p>
      </div>
      <div>
        Links
        <a href="https://www.youtube.com/user/TheHashimoto5" />
        <a href="https://github.com/e-hashimoto" />
        <a href="https://www.linkedin.com/in/exequiel-hashimoto/" />
      </div>
    </div>
  );
}

export default Home;
