import React from 'react';
import "../Styles/Projects.css";

function Projects() {
    return (
      <div className="project-page">
      <div className='field'>
        <h1>Career Projects: <p>career projects are fields for hire or collaboration.</p></h1>
        <h1>Impression Projects: <p>impression projects are showcase of my skills, and not looking for work in those fields.</p></h1>
      </div>
      <div className="category gaming">
        <h2>Gaming</h2>
        <h3>Career Projects</h3>
        <div></div>
        
      </div>
      <div className="category web">
        <h2>Web</h2>
        <h3>Impression Projects</h3>
        <div></div>
      </div>
      <div className="category film">
        <h2>Film</h2>
        <h3>Career Projects</h3>
        <div></div>
      </div>
      <div className="category writing">
        <h2>Literature</h2>
        <h3>Impression Projects</h3>
        <div></div>
      </div>
    </div>
    );
  }




  export default Projects;