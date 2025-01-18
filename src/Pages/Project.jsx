import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Project.css';
import logo from '../Images/Logos/logowhitebg.png';
import game2image from '../Images/projectsImages/dont let it grow.png';
import pdficon from '../Images/ImagesCategories/pdf.png';

import story1 from '../PDF/story1.pdf';

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
              { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.ScorpionCobraStudio.EscapeTheHumans' },
              { name: 'Itch.io', url: 'https://dom678.itch.io/escape-the-humans'}
              
            ],
          };
          break;

        case 'game2':
          project = {
            id: id,
            title: 'Dont Let It Grow',
            image: game2image,
            storeLinks: [
              { name: 'Itch.io', url: 'https://dom678.itch.io/dont-let-it-grow' }
            ],
          };
          break;

          case 'web1':
            project = {
              id: id,
              title: 'Scorpion Cobra Studio',
              image: logo,
            };
            break;

            case 'literature1':
              project = {
                id: id,
                title: 'The World Needs of Failures',
                image: pdficon,
                pdf: story1,
              };
              break;
        default:
        return <h2>Project not found</h2>;
    }

   

    return (
      <div className="project-page">
          <div className="project-container">
              <h1>{project.title}</h1>

              {/* Video or Image */}
              <div className="video-or-image-container">
                  {project.trailerId ? (
                      <iframe
                          id="project-trailer"
                          title={`${project.title} Trailer`}
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${project.trailerId}`}
                          allowFullScreen
                      ></iframe>
                  ) : (
                      project.image && (
                          <img
                              src={project.image}
                              alt={project.title}
                              className="project-image"
                          />
                      )
                  )}
              </div>

              {/* Store Links */}
              {project.storeLinks && project.storeLinks.length > 0 && (
                  <div className="store-links">
                      {project.storeLinks.map((store, index) => (
                          <a
                              key={index}
                              href={store.url}
                              className="store-link"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              {store.name}
                          </a>
                      ))}
                  </div>
              )}

              {/* PDF Download Link */}
              {project.pdf && (
                  <div>
                      <a
                          href={project.pdf}
                          download={`download-${project.title}`}
                      >
                          Download PDF
                      </a>
                  </div>
              )}
          </div>
      </div>
  );
};

export default Project;
