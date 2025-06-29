import React from "react";

const projects = [
    {
        id: 1,
        name: "Portfolio Website",
        image:
            "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
        techStack: ["React", "Tailwind CSS"],
        description:
            "Professional portfolio website built with React and Tailwind CSS.",
        liveLink: "https://yourportfolio.com",
        githubLink: "https://github.com/yourgithub/portfolio",
        challenges:
            "Responsive design and smooth scroll implementation were challenging.",
        improvements:
            "Plan to add blog section and more projects in the future.",
    },
    {
        id: 2,
        name: "E-commerce Website",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
        techStack: ["React", "Node.js", "MongoDB"],
        description: "An online shopping platform with user authentication.",
        liveLink: "https://yourecommerce.com",
        githubLink: "https://github.com/yourgithub/ecommerce",
        challenges: "Handling payment gateway and user authentication was tough.",
        improvements: "Planning to add more payment options and improve UI.",
    },
    {
        id: 3,
        name: "Blog Platform",
        image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
        techStack: ["React", "Firebase"],
        description: "A blogging platform with real-time data sync.",
        liveLink: "https://yourblog.com",
        githubLink: "https://github.com/yourgithub/blog",
        challenges:
            "Implementing real-time synchronization was challenging.",
        improvements: "Planning to add comment system and dark mode.",
    },
];

const Project = () => {
    const handleViewMore = (project) => {
        alert(`
Project Name: ${project.name}

Tech Stack: ${project.techStack.join(", ")}

Description: ${project.description}

Live Project: ${project.liveLink}

GitHub Repo: ${project.githubLink}

Challenges: ${project.challenges}

Future Improvements: ${project.improvements}
    `);
    };

    return (
        <section
            id="projects"
            className="max-w-5xl mx-auto py-20 px-4"
        >
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold">{project.name}</h3>
                            <button
                                onClick={() => handleViewMore(project)}
                                className="mt-4 text-blue-700 hover:underline"
                            >
                                View More / Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
