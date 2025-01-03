import React from 'react';
import "../Styles/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity, faReact, faAngular, faNode, faWordpress, faBootstrap, faHtml5, faJs, faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import csharpIcon from "../Images/icons/csharpIcon.png";
import gdscript from "../Images/icons/gdscripticon.png";
import godoticon from "../Images/icons/godoticon.png";
import typescripticon from "../Images/icons/typescripticon.png";
import mysqlicon from "../Images/icons/mysqlicon.png";
import mongodbicon from "../Images/icons/mongodbicon.png";
import blendericon from "../Images/icons/blendericon.png";
import kritaicon from "../Images/icons/kritaicon.png";
import audacityicon from "../Images/icons/audacityicon.png";



function About() {
    return (
      <div className="about-page">
      <div className="profile-section">
        <div className="image-placeholder"></div>
        <div className="text-box">
          <p>hi, I'm osher volotker, a passionate gamer for games and stories, 
          after so many years with love for video games. I became a developer to build games, and help others build great games. 
          Apart from that I also have the passion for stories, both for games and film. I have experience with unity and Godot engines and a variety of tools.
          My studio currently include only myself, but hopefully it will grow and more great developers could join in.
          I focus mainly in video games and film for career paths. You are welcome to check out my site and contact me if you wish to hire me or collaborate. I am a very creative person with deep analysis thinking, a team player, organized, and determined. any story you have to tell the world whenever its a game or a film I will be happy to work with you. You name it, I make it.</p>
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

          <div className="education-column">
            <h3>Game Development</h3>
            <p>School: Hotmart Club</p>
            <p>Year: 2023</p>
            <p>Online Certificate: Pro Indie Dev</p>
          </div>

        </div>
      </div>

      <div className="tools-section">
        <h2>Tools and Frameworks</h2>
        <div className="tools-details">
          <div className="tool-item">
            <div className="tool-title"><h3>Web</h3></div>
            <div className="tools-symbols">
            <FontAwesomeIcon icon={faReact} size='2x' className='icon' title="React"/>
            <FontAwesomeIcon icon={faAngular} size='2x' className='icon' title="Angular"/>
            <FontAwesomeIcon icon={faNode} size='2x' className='icon' title="NodeJS"/>
            <FontAwesomeIcon icon={faWordpress} size='2x' className='icon' title="WordPress"/>
            <FontAwesomeIcon icon={faBootstrap} size='2x' className='icon' title="Bootstrap"/>
            <FontAwesomeIcon icon={faHtml5} size='2x' className='icon'title="HTML"/>
            <FontAwesomeIcon icon={faJs} size='2x' className='icon' title="Javascript"/>
            <FontAwesomeIcon icon={faCss3Alt} size='2x' className='icon' title="CSS"/>
            <img src={typescripticon} alt="typescript" className="icon" style={{ width: '35px', height: '35px' }} title="Typescript"/>
            <img src={mysqlicon} alt="mysql" className="icon" style={{ width: '35px', height: '35px' }} title="MySQL"/>
            <img src={mongodbicon} alt="mongodb" className="icon" style={{ width: '30px', height: '35px' }} title="MongoDB"/>
            </div>
          </div>
          <div className="tool-item">
            <div className="tool-title"><h3>Gaming</h3></div>
            <div className="tools-symbols">
            <FontAwesomeIcon icon={faUnity} size='2x' className='icon' title='Unity' />
            <img src={csharpIcon} alt="C#" className="icon" style={{ width: '38px', height: '38px' }} title="C#"/>
            <img src={gdscript} alt="gdscript" className="icon" style={{ width: '65px', height: '30px' }} title="GDscript"/>
            <img src={godoticon} alt="godot" className="icon" style={{ width: '38px', height: '38px'  }} title="Godot"/>
            <img src={blendericon} alt="blender" className="icon" style={{ width: '38px', height: '38px'  }} title="Blender"/>
            <img src={kritaicon} alt="krita" className="icon" style={{ width: '38px', height: '38px'  }} title="Krita"/>
            <img src={audacityicon} alt="audacity" className="icon" style={{ width: '38px', height: '38px'  }} title="Audacity"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  export default About;