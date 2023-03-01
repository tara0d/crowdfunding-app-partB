import React from "react";
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <div className="project-card-details">  {/*TO8*/}
                <Link to={`/project/${projectData.id}`}>
                    <div>
                        <img src={projectData.thumbnail_image} />
                    </div>
                    <div className="project-card-text">
                        <h3>{projectData.title}</h3>
                        <p>{projectData.description}</p>
                        <p>{projectData.owner}</p>
                    </div>
                </Link>
            </div>
        </div>

    )
};

export default ProjectCard;