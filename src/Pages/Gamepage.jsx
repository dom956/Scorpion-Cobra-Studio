import React from 'react';
import "../Styles/Gamepage.css";
import { useParams } from 'react-router-dom';


const gamesData = {
    game1: {
      title: 'Escape The Humans',
      trailerId: '6r9mpLfZKbQ', 
      storeLinks: [
        { name: 'Google Play', url: 'https://play.google.com/' },
        { name: 'Itch.io', url: 'https://itch.io/' },
        { name: 'Apple Store', url: 'https://www.apple.com/app-store/' },
      ],
    },
    game2: {
      title: 'Dont Let It Grow',
    trailerId: '6r9mpLfZKbQ', /* change game trailerid later */
    storeLinks: [
        { name: 'WebGL', url: 'https://play.google.com/' }, /* change URL later, your game will be played in your site */
        { name: 'Itch.io', url: 'https://itch.io/' },
      ],
    },
    
  };


function Gamepage() {

    const { gameId } = useParams();
    const game = gamesData[gameId];
  
    if (!game) {
      return <h2>GameID not found</h2>;
  }

    return (
        <div className='page-center'>
        <div className='parent-container'>
        <h1>{game.title}</h1>
        <div className="video-container">
        <iframe
          title={`${game.title} Trailer`}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${game.trailerId}`}
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
        </div>
        <div className="store-links">
        {game.storeLinks.map((store, index) => (
          <a key={index} href={store.url} className="store-link">{store.name}</a>
        ))}
      </div>
      </div>
      </div>
    );
  }





  export default Gamepage;