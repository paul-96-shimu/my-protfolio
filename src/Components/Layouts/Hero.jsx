import React from 'react';
import {  FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="hero"
            className="py-20 bg-[#FFF3EA] text-white mt-10"
        >
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 px-6">

                {/* Left Side - Text & Buttons */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold"><span className='text-black'> Hello i’m</span> <span className="text-[#FF6B00]">Shimu Paul</span></h1>
                    <p className="text-3xl  md:text-5xl font-bold mt-2 text-black"> A Full Stack Web Developer</p>




                    <div>


                        <p className='text-[#606060] mt-10' >


                            I am Shimu Paul, a Full Stack Developer. My programming journey started with HTML and CSS. Later, I learned JavaScript and React. Then I picked up backend development using Node.js and MongoDB. I love solving problems through coding.

                            Outside programming, I enjoy painting, playing badminton, and listening to new music.

                        </p>
                    </div>

                
                   

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/c:/Users/Shimu Paul/Downloads/Resume of Shimu Paul.docx.pdf"
                            download
                            className=" bg-[#FF6B00] inline-flex items-center px-6 py-2  text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                        >
                            <FaDownload className="mr-2" />
                            Download CV
                        </a>

                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center md:justify-end md:w-1/2">
                    <img
                        src="https://i.ibb.co/zhmhDMm1/Whats-App-Image-2025-06-25-at-8-15-21-AM.jpg"
                        alt="Shimu Paul"
                        className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
