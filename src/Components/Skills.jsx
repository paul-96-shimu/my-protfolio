import React from 'react';

const skillCategories = [
    {
        category: 'Frontend',
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'MongoDB'],
    },
    {
        category: 'Tools',
        skills: ['Git', 'VS Code', 'Postman'],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="max-w-5xl mx-auto py-20 px-4"
        >
            <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map(({ category, skills }) => (
                    <div
                        key={category}
                        className="bg-white rounded-lg shadow p-6 border border-gray-200"
                    >
                        <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                            {skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
