import React from 'react';
import "../Styles/Home.css";
import image1 from "../Images/projectsImages/escape the humans.png";
import image2 from '../Images/projectsImages/dont let it grow.png';
import { Link } from 'react-router-dom';

const projectList = {
  game1: {
    projectid: 'game1',
    image: image1
  },
  game2: {
    projectid: 'game2',
    image: image2
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