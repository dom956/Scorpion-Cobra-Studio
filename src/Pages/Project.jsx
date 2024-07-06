import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Project.css';
import splashscreen from '../Images/splashscreen.png';

const Project = () => {
    const { id } = useParams();

    let project = {};

    switch (id) {
        case 'game1':
          project = {
            id: id,
            title: 'Escape The Humans',
            trailerId: '6r9mpLfZKbQ',
            storeLinks: [
              { name: 'Google Play', url: 'https://play.google.com/' },
              { name: 'Itch.io', url: 'https://itch.io/' },
              { name: 'Apple Store', url: 'https://www.apple.com/app-store/' },
            ],
            
          };
          break;
        case 'game2':
          project = {
            id: id,
            title: 'Dont Let It Grow',
            trailerId: '6r9mpLfZKbQ',
            storeLinks: [
              { name: 'WebGL', url: 'https://play.google.com/' },
              
            ],
            
          };
          break;
          case 'web1':
            project = {
              id: id,
              title: 'Scorpion Cobra Studio',
              image: splashscreen,
            };
            break;
        default:
        return <h2>Project not found</h2>;
    }

   

    return (
        <div className='page-center'>
      <div className='parent-container'>
        <h1>{project.title}</h1>
        
        {/* Render trailer video if trailerId is present */}
        {project.trailerId && (
          <div className="video-container">
            <iframe
              title={`${project.title} Trailer`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${project.trailerId}`}
              allowFullScreen
            ></iframe>
          </div>
        )}
        
        {/* Render store links if storeLinks array is present */}
        {project.storeLinks && project.storeLinks.length > 0 && (
          <div className="store-links">
            {project.storeLinks.map((store, index) => (
              <a key={index} href={store.url} className="store-link">{store.name}</a>
            ))}
          </div>
        )}
        
        {/* Render project image if image is present */}
        {project.image && (
          <div className="project-image-container">
            <img src={project.image} alt={project.title} className='project-image' />
          </div>
        )}
      </div>
    </div>
    );
};

export default Project;
