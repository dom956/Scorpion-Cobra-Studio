import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Category.css';
import film from '../Images/film.jpg';
import splashscreen from '../Images/splashscreen.png';


const projectData = {
    gaming: [
      {
        title: 'Escape The Humans',
        description: '2D puzzle platformer game, navigate your way through a series of mazes, avoid enemies, and solve your way out.',
        link: 'https://www.youtube.com/?hl=iw&gl=IL',
        creator: 'Scorpion Cobra Studio',
        platforms: 'WebGL, Mobile',
        published: '2024',
        createdWith: 'Unity, C#, Audacity, Blender',
        image: splashscreen, // Add appropriate image path
      },
      {
        title: 'Dont Let It Grow',
        description: 'mini 2D game with a message',
        link: 'WWW.https/gamelinks',
        creator: 'Scorpion Cobra Studio',
        platforms: 'WebGL',
        published: '2024',
        createdWith: 'Unity, C#',
        image: film, // Add appropriate image path
      },
      
    ],
    web: [
        {
            title: 'Scorpion Cobra Studio',
            description: 'An indie game developer studio.',
            link: 'WWW.https/gamelinks',
            creator: 'Osher Volotker',
            published: '2024',
            createdWith: 'React, Bootstrap, Css, Javascript',
            image: '/Images/film.jpg', // Add appropriate image path
          },
          {
            title: 'website',
            description: 'website description',
            link: 'WWW.https/gamelinks',
            creator: 'Scorpion Cobra Studio',
            published: '2024',
            createdWith: 'HTML',
            image: '/Images/film.jpg', // Add appropriate image path
          },
    ],
    
  };
  
  const Category = () => {
    const { categoryName } = useParams();
    const projects = projectData[categoryName];
  
    if (!projects) {
      return <div>Project not found</div>;
    }

    return (
        <div className="category-page">
        <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Projects</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>Description: {project.description}</p>
                <p>Link to Game: <a href={project.link}>{project.link}</a></p>
                <p>Creator: {project.creator}</p>
                {categoryName === 'gaming' && <p>Platforms: {project.platforms}</p>}
                <p>Published: {project.published}</p>
                <p>Created with: {project.createdWith}</p>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      );
};


export default Category;