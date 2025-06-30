import React from 'react';

import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="hero"
            className="text-center py-20 bg-gradient-to-br  text-white"
        >
            <img
                src="https://i.ibb.co/zhmhDMm1/Whats-App-Image-2025-06-25-at-8-15-21-AM.jpg" // ইচ্ছা করলে এখানে নিজের ছবি দিন
                alt="Shimu Paul"
                className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />


            <h1 className="text-3xl md:text-5xl font-bold">Shimu Paul</h1>
            <p className="text-xl mt-2">Full Stack Web Developer</p>


            <div className="mt-4 flex justify-center space-x-6 text-2xl">
                <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://facebook.com/yourfb" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a>
            </div>

            <a
                href="/c:\Users\Shimu Paul\Downloads\Resume of Shimu Paul.docx.pdf"
                download
                className="mt-6 inline-flex items-center px-6 py-2 bg-white text-blue-900 font-semibold rounded-lg shadow hover:scale-105 transition mt-6"
            >
                <FaDownload className="mr-2" />
                Download Resume
            </a>
        </section>
    );
};

export default Hero;
