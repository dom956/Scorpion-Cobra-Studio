import React from 'react';
import "../Styles/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity, faReact, faAngular, faNode, faWordpress, faBootstrap, faHtml5, faJs, faCss3Alt} from '@fortawesome/free-brands-svg-icons';



function About() {
    return (
      <div className="about-page">
      <div className="profile-section">
        <div className="image-placeholder"><img src="" alt="profile pic" /></div>
        <div className="text-box">
          <p>hello im Osher Volotker, a passionate gamer to stories and games. im an indie game developer for over 1 year of experience</p>
        </div>
      </div>

      <div className="education-section">
        <h2>Education</h2>
        <div className="education-details">
          <div className="education-column">
            <h3>Game Development</h3>
            <p>School: Hasifa communication and digital</p>
            <p>Year: 2020-2021</p>
            <p>Certificate: Game design and development</p>
            
          </div>
          <div className="education-column">
            <h3>Web Development</h3>
            <p>School: Hacker U</p>
            <p>Year: 2022-2023</p>
            <p>Certificate: Web design and development</p>
            
          </div>
          <div className="education-column">
            <h3>Film</h3>
            <p>School: Skillshare</p>
            <p>Year: 2023</p>
            <p>Online Certificate: Screenwriting</p>
            
          </div>
        </div>
      </div>

      <div className="tools-section">
        <h2>Tools and Frameworks</h2>
        <div className="tools-details">
          <div className="tool-item">
            <div className="tool-title"><h3>Web</h3></div>
            <div className="tools-symbols">
            <FontAwesomeIcon icon={faReact} size='2x' className='icon' />
            <FontAwesomeIcon icon={faAngular} size='2x' className='icon' />
            <FontAwesomeIcon icon={faNode} size='2x' className='icon' />
            <FontAwesomeIcon icon={faWordpress} size='2x' className='icon' />
            <FontAwesomeIcon icon={faBootstrap} size='2x' className='icon' />
            <FontAwesomeIcon icon={faHtml5} size='2x' className='icon' />
            <FontAwesomeIcon icon={faJs} size='2x' className='icon' />
            <FontAwesomeIcon icon={faCss3Alt} size='2x' className='icon' />
            </div>
          </div>
          <div className="tool-item">
            <div className="tool-title"><h3>Gaming</h3></div>
            <div className="tools-symbols">
            <FontAwesomeIcon icon={faUnity} size='2x' className='icon' />
            
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

/* add custom SVG to your project since fontawsome dont have them: audacity, blender, krita, mysql, mongoDB, C# */


  export default About;