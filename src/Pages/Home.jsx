import React from 'react';
import "../Styles/Home.css";
import splashscreen from "../Images/splashscreen.png";
import { Link } from 'react-router-dom';


const projectList = {
  game1: {
    projectid: 'game1',
    title: 'Escape The Humans',
    image: splashscreen
  },

  game2: {
    projectid: 'game2',
    title: 'Dont Let It Grow',
    image: splashscreen
  },
};

function Home() {
    return (
      <div className='page-container'>
      <div className='parent-container'>
      <h1>My Games</h1>
      <div className='games-list'>
        {Object.keys(projectList).map(projectId => (
          <div key={projectId} className='game-item'>
            <h2>{projectList[projectId].title}</h2>
            <Link to={`/project/${projectList[projectId].projectid}`}>
              <img
                src={projectList[projectId].image}
                alt={projectList[projectId].title}
                className="splash-screen"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
    );
  }




  export default Home;