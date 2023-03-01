import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            console.log(results);
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, []);

    // console.log(projectData);
    console.log(projectData.project_images);

    return (
        <div>
            <h2>{projectData.title}</h2>
            <div>
                {projectData.project_images ? 
                    <Carousel id="carousel-div">
                        {projectData.project_images.map((projectImage, key) => {
                            return <img src={projectImage.image_url} key={key} />;
                        })}
                    </Carousel>
                    : <h3>Sorry there are no images in this project</h3>
                }

            </div>
            <h3>Created at: {projectData.date_created}</h3>
            <p>{projectData.description}</p>
            <h3>{`Status ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                    <li key={key}>{pledgeData.amount} from {pledgeData.supporter}
                    </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default ProjectPage;