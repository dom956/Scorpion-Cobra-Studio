import React from 'react';
import "../Styles/Home.css";
import splashscreen from "../Images/projectsImages/escape the humans.png";
import { Link } from 'react-router-dom';

const projectList = {
  game1: {
    projectid: 'game1',
    image: splashscreen
  },
  game2: {
    projectid: 'game2',
    image: splashscreen
  },
};

function Home() {
  return (
    <div className='homepage-container'>
      <div className='home-container'>
        <div className='games-list'>
          {Object.keys(projectList).map(projectId => (
            <div key={projectId} className='game-item'>
              <Link to={`/project/${projectList[projectId].projectid}`} className='link'>
                <img
                  src={projectList[projectId].image}
                  alt=''
                  className="splash-image"
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