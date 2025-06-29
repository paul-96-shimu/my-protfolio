import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/public/web.json") // ✅ public folder e json file
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-black">{project.name}</h3>
                            <Link to={`/projectsdetails/${project.id}`}>
                                <button className="mt-4 text-blue-700 hover:underline">
                                    View More / Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
