import React from 'react';
import { FaDownload, FaFacebookF, FaGithub , FaLinkedinIn } from "react-icons/fa";


import MotionTitle from '../MotionTitle';

import moduleName from '../../assets/shimupaul.png'
import moduleName2 from "../../assets/Frame.svg";


const Hero = () => {
    return (
        <section
            id="hero"
            className="mt-16 bg-[#FFF3EA]"
        >
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 px-6  text-white  container mx-auto relative ">

                {/* Left Side - Text & Buttons */}
                <div className="text-center md:text-left md:w-1/2">
                 <h4 className="text-base font-normal mb-4 flex items-center gap-2 text-black"> <img src={moduleName2} alt="" /> I AM Developer</h4>
                    <h1 className="text-3xl md:text-5xl font-bold">
                        <span className='text-black'>Hello ✋ I’m</span>  <span className="text-[#FF6B00]">Shimu Paul</span>
                    </h1>
                      
                    <p className="text-3xl md:text-5xl font-bold mt-2 text-black ">
                        {/* A Full Stack Web Developer */}

                        <MotionTitle></MotionTitle>
                    </p>

                    <p className='text-[#606060] mt-10'>
                        I’m a junior developer who loves creating web applications and improving my skills every single day.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" 
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 shadow hover:bg-blue-600 hover:text-white transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" 
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-sky-500 shadow hover:bg-sky-500 hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" 
                           className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 shadow hover:bg-blue-700 hover:text-white transition">
                            <FaLinkedinIn />
                        </a>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="https://drive.google.com/file/d/1nlfZmfrXLd-guxz4tc5pis_iA_asRJEA/view?usp=drive_link"
                            download
                            className="bg-[#FF6B00] inline-flex items-center px-6 py-2 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                        >
                            <FaDownload className="mr-2" />
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center md:justify-end md:w-1/2">
                    <img
                        src={moduleName}
                        alt="Shimu Paul"
                         loading="lazy"
                        className="  shadow-lg object-cover w-[707px] h-[849px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
