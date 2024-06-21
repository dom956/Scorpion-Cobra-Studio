import React from 'react';
import "../Styles/Home.css";
import splashscreen from "../Images/splashscreen.png";
import { Link } from 'react-router-dom';


const gamesList = {
  game1: {
      title: 'Escape The Humans',
      image: splashscreen
  },

  game2: {
      title: 'Dont Let It Grow',
      image: splashscreen
  },
};

function Home() {
    return (
      <div className='parent-container'>
      <h1>My Games</h1>
      <div className='games-list'>
        {Object.keys(gamesList).map(gameId => (
          <div key={gameId} className='game-item'>
            <h2>{gamesList[gameId].title}</h2>
            <Link to={`/gamepage/${gameId}`}>
              <img
                src={gamesList[gameId].image}
                alt={gamesList[gameId].title}
                className="splash-screen"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
  }




  export default Home;