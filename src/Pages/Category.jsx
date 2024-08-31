import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/Category.css';
import filmImage from '../Images/film.jpg';
import splashscreen from '../Images/splashscreen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity, faReact, faJs, faBootstrap, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import audacityicon from "../Images/icons/audacityicon.png";
import godoticon from "../Images/icons/godoticon.png";
import logo from "../Images/logowhitebg.png";

const Category = () => {
    const { categoryName } = useParams();

    let projects = [];
    let pageTitle = '';

    switch (categoryName) {
        case 'gaming':
            pageTitle = 'Gaming Projects';
            projects = [
                {
                    id: 'game1',
                    title: 'Escape The Humans',
                    description: '2D puzzle platformer game, navigate your way through a series of challenging levels, avoid enemies, and solve your way out.',
                    creator: 'Scorpion Cobra Studio',
                    platforms: 'PC, Mobile',
                    published: '2024',
                    createdWith: [
                        { name: 'Unity', icon: faUnity },
                        { name: 'Audacity', icon: audacityicon }
                    ],
                    image: splashscreen,
                },
                {
                    id: 'game2',
                    title: 'Dont Let It Grow',
                    description: 'Mini 2D game with a message',
                    creator: 'Scorpion Cobra Studio',
                    platforms: 'WebGL',
                    published: '2024',
                    createdWith: [
                        {name: 'Godot', icon: godoticon }
                    ],
                    image: filmImage,
                },
            ];
            break;
        case 'web':
            pageTitle = 'Web Projects';
            projects = [
                {
                    id: 'web1',
                    title: 'Scorpion Cobra Studio',
                    description: 'An indie game developer studio.',
                    creator: 'Osher Volotker',
                    published: '2024',
                    createdWith: [
                        { name: 'React', icon: faReact },
                        { name: 'HTML', icon: faHtml5 },
                        { name: 'Javascript', icon: faJs },
                        { name: 'CSS', icon: faCss3Alt },
                        { name: 'Bootstrap', icon: faBootstrap },
                    ],
                    image: logo,
                },
            ];
            break;
        case 'film':
            pageTitle = 'Film Projects';
            projects = [
              /* your film projects here */
            ];
            break;
        case 'literature':
            pageTitle = 'Literature Projects';
            projects = [
              /* your literature projects here */
            ];
            break;
        default:
            return <div>Category not found</div>;
    }

    return (
        <div className="category-page">
        <h1>{pageTitle}</h1>
        {projects.length > 0 ? (
            <div className="category-grid">
                {projects.map((project, index) => (
                    <div key={index} className="category-box">
                        <div className="category-info">
                            <h2>{project.title}</h2>
                            <p>Description: {project.description}</p>
                            <p>Creator: {project.creator}</p>
                            {categoryName === 'gaming' && <p>Platforms: {project.platforms}</p>}
                            <p>Published: {project.published}</p>
                            {categoryName === 'gaming' || categoryName === 'web' ? (
                                <div className="created-with-container">
                                    <p className="created-with-text">Created with:</p>
                                    <div className="icons">
                                        {project.createdWith && project.createdWith.map((tool, idx) => (
                                            <div key={idx} className="icon">
                                                {typeof tool.icon === 'object' ? (
                                                    <FontAwesomeIcon icon={tool.icon} title={tool.name} size="2x" />
                                                ) : (
                                                    <img src={tool.icon} alt={tool.name} title={tool.name} className="icon-image" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div className="category-image">
                            <Link to={`/project/${project.id}`}>
                                <img src={project.image} alt={project.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="no-projects-message">
                <p>No projects yet</p>
            </div>
        )}
    </div>
    );
};

export default Category;
