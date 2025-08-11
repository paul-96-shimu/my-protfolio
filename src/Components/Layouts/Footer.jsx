import React from "react";


import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
      






        <footer className="bg-black text-gray-300 py-8">
            {/* Logo and Menu */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-white">
                    <span className="text-green-500">Shimu</span>Paul
                </h1>
                <div className="flex justify-center gap-6 mt-4 text-sm font-semibold">
                    <a href="#about" className="hover:text-green-500">ABOUT ME</a>
                    <a href="#services" className="hover:text-green-500">SERVICES</a>
                    <a href="#portfolio" className="hover:text-green-500">PORTFOLIO</a>
                    <a href="#blog" className="hover:text-green-500">BLOG</a>
                    <a href="#contact" className="hover:text-green-500">CONTACT US</a>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 text-gray-400 text-lg mb-6">
                <a href="https://facebook.com" className="flex items-center gap-2 hover:text-green-500">
                    <FaFacebookF /> Facebook
                </a>
                <a href="https://twitter.com" className="flex items-center gap-2 hover:text-green-500">
                    <FaTwitter /> Twitter
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-green-500">
                    <FaLinkedinIn /> Linkedin
                </a>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-gray-700 pt-4 flex justify-between items-center max-w-6xl mx-auto text-sm">
                <p>
                    Copyright © <span className="text-green-500">ShimuPaul</span>
                </p>
                <div className="flex gap-6">
                    <a href="#terms" className="hover:text-green-500">Terms & Conditions</a>
                    <a href="#privacy" className="hover:text-green-500">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
