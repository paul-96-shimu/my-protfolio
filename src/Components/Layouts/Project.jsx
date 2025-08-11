import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import about from '../../assets/lottie/About Project.json'
import Lottie from "lottie-react";

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/web.json") // public folder থেকে json file fetch করো
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <section id="projects" className=" bg-black mb-27">

            <div className="mb-12 max-w-5xl mx-auto py-20 px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
                    <Lottie animationData={about} loop={true} className="w-60 h-60 md:w-60 md:h-60" />

                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div key={project.id} 
                        
                          className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">


                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold text-black">{project.name}</h3>
                                <Link to={`/projectsdetails/${project.id}`}>
                                    <button className=" btn  btn-outline btn-primary mt-4">
                                        View More / Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
