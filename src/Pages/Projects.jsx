import React from 'react';
import "../Styles/Projects.css";
import { Link } from 'react-router-dom';

function Projects() {
    return (
      <div className="project-page">
      <div className='field'>
        <h1>Career Projects: <p>career projects are fields for hire or collaboration.</p></h1>
        <h1>Impression Projects: <p>impression projects are showcase of my skills, and not looking for work in those fields.</p></h1>
      </div>
      <Link to="/category/gaming" className='link'>
      <div className="category gaming">
        <h2>Gaming</h2>
        <h3>Career Projects</h3>
        <div></div>
      </div>
      </Link>
      <Link to="/category/web" className='link'>
      <div className="category web">
        <h2>Web</h2>
        <h3>Impression Projects</h3>
        <div></div>
      </div>
      </Link>
      <Link to="/category/film" className='link'>
      <div className="category film">
        <h2>Film</h2>
        <h3>Career Projects</h3>
        <div></div>
      </div>
      </Link>
      <Link to="/category/literature" className='link'>
      <div className="category writing">
        <h2>Literature</h2>
        <h3>Impression Projects</h3>
        <div></div>
      </div>
      </Link>
    </div>
    );
  }




  export default Projects;