import React from 'react';
import { Link } from 'react-router';
import LogoMonogram from '../assets/shimu-paul-hex-ligature.svg';

const Navbar = () => {
  return (
    <nav className=" text-black px-4 py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img 
            src={LogoMonogram} 
            alt="Shimu Paul Logo" 
            className="w-10 h-10 bg-white rounded-full p-1"
          />
          <span className="text-xl font-bold">Shimu Paul</span>
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#education" className="hover:text-yellow-400">Education</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>


          
        </div>

        {/* Right - Contact */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="bg-[#FF6B00] text-white px-4 py-2 rounded hover:bg-orange-500 transition"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <span className="text-2xl cursor-pointer">☰</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
