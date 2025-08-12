import React from 'react';
import Marquee from 'react-fast-marquee';

// Skill Icons
import logo from '../assets/html.png';
import logo1 from '../assets/js.jpeg';
import logo2 from '../assets/mongo db.png';
import logo3 from '../assets/nodejs.png';
import logo4 from '../assets/react.png';
import logo5 from '../assets/tailwind.png';
import logo6 from '../assets/css.jpeg';
import logo7 from '../assets/ex.png';

const skills = [
   { name: '💻 HTML', icon: logo },
    { name: '⚡ JavaScript', icon: logo1 },
    { name: '🗄️ MongoDB', icon: logo2 },
    { name: '🛠️ Node.js', icon: logo3 },
    { name: '⚛️ React', icon: logo4 },
    { name: '🎨 Tailwind CSS', icon: logo5 },
    { name: '🎯 CSS', icon: logo6 },
    { name: '🚀 Express.js', icon: logo7 }
];

const Skills = () => {
    return (
        <section id="skills" className=" mx-auto py-20 px-4">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center mb-4">🚀 My Skills 🚀</h2>
            <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Here are some of the technologies and tools I work with regularly to build fast, 
                scalable, and visually appealing web applications.
            </p>

            {/* Skills Marquee */}
            <div className="bg-gradient-to-r from-[#FFF3EA] via-white to-[#FFF3EA] py-6 rounded-lg shadow">
                <Marquee speed={50} gradient={false}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center mx-10"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-16 h-16 object-contain mb-2 transition-transform duration-300 hover:scale-110"
                            />
                            <p className="text-lg font-semibold text-blue-800">{skill.name}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
