import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/Category.css';
import filmImage from '../Images/film.jpg';
import splashscreen from '../Images/splashscreen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity, faAccusoft } from '@fortawesome/free-brands-svg-icons';

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
                    description: '2D puzzle platformer game, navigate your way through a series of mazes, avoid enemies, and solve your way out.',
                    creator: 'Scorpion Cobra Studio',
                    platforms: 'WebGL, Mobile',
                    published: '2024',
                    createdWith: [
                        { name: 'Unity', icon: faUnity },
                        { name: 'ad', icon: faAccusoft },
                    ],
                    image: splashscreen,
                },
                {
                    id: 'game2',
                    title: 'Dont Let It Grow',
                    description: 'mini 2D game with a message',
                    creator: 'Scorpion Cobra Studio',
                    platforms: 'WebGL',
                    published: '2024',
                    createdWith: [
                        { name: 'Unity', icon: faUnity },
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
                        { name: 'Unity', icon: faUnity },
                    ],
                    image: filmImage,
                },
                {
                    id: 'web2',
                    title: 'website',
                    description: 'website description',
                    creator: 'Scorpion Cobra Studio',
                    published: '2024',
                    createdWith: [
                        { name: 'Unity', icon: faUnity },
                    ],
                    image: filmImage,
                },
            ];
            break;
        case 'film':
            pageTitle = 'Film Projects';
            projects = [
                {
                    id: 'film1',
                    title: 'Film Title 1',
                    description: 'Description of film 1.',
                    creator: 'Film Creator 1',
                    published: '2024',
                    image: filmImage,
                },
                {
                    id: 'film2',
                    title: 'Film Title 2',
                    description: 'Description of film 2.',
                    creator: 'Film Creator 2',
                    published: '2024',
                    image: filmImage,
                },
            ];
            break;
        case 'literature':
            pageTitle = 'Literature Projects';
            projects = [
                {
                    id: 'literature1',
                    title: 'Literature Title 1',
                    description: 'Description of literature 1.',
                    creator: 'Literature Creator 1',
                    published: '2024',
                    image: filmImage,
                },
                {
                    id: 'literature2',
                    title: 'Literature Title 2',
                    description: 'Description of literature 2.',
                    creator: 'Literature Creator 2',
                    published: '2024',
                    image: filmImage,
                },
            ];
            break;
        default:
            return <div>Category not found</div>;
    }

    return (
        <div className="category-page">
            <h1>{pageTitle}</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-box">
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>Description: {project.description}</p>
                            <p>Creator: {project.creator}</p>
                            {categoryName === 'gaming' && <p>Platforms: {project.platforms}</p>}
                            <p>Published: {project.published}</p>
                            <div className="created-with-container">
                                <p className="created-with-text">Created with:</p>
                                <div className="icons">
                                    {project.createdWith.map((tool, idx) => (
                                        <div key={idx} className="icon">
                                            <FontAwesomeIcon icon={tool.icon} title={tool.name} size="2x" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="project-image">
                        <Link to={`/project/${project.id}`}>
                                <img src={project.image} alt={project.title} />
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
