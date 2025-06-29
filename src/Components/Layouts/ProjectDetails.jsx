import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/public/web.json")
            .then((res) => res.json())
            .then((data) => {
                const selected = data.find(p => p.id === parseInt(id));
                setProject(selected);
            });
    }, [id]);

    if (!project) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
            <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded mb-6" />
            <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Challenges:</strong> {project.challenges}</p>
            <p><strong>Improvements:</strong> {project.improvements}</p>
            <div className="mt-4 flex gap-4 ">
                <a href={project.liveLink} target="_blank" className="text-blue-600 underline">Live</a>
                <a href={project.githubLink} target="_blank" className="text-blue-600 underline">GitHub</a>
            </div>
        </div>
    );
};

export default ProjectDetails;
