import React from 'react';
import { Link } from 'react-router';

const Navber = () => {
    return (
        <nav className="bg-blue-950 text-white px-4 py-3 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold cursor-pointer">Shimu Paul</h1>
                <div className="hidden md:flex gap-6">
                    <Link to="/">Home</Link>

                    <a href="#about" className="hover:text-yellow-400">About</a>
                    <a href="#skills" className="hover:text-yellow-400">Skills</a>
                    <a href="#education" className="hover:text-yellow-400">Education</a>

                    <a href="#projects" className="hover:text-yellow-400">Projects</a>
                    <Link to="/contact">Contact Me</Link>
                </div>
                <div className="md:hidden">

                    <span className="text-2xl cursor-pointer">☰</span>
                </div>
            </div>
        </nav>
    );
};

export default Navber;