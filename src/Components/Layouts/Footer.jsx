import React from "react";
// import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-gray-300">
            {/* Top */}
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand + about */}
                    <div>
                        <div className="relative inline-flex items-center">
                            <span className="absolute -left-3 -top-2 h-6 w-6 rounded-full bg-orange-500" />
                            <span className="relative z-10 text-2xl font-semibold tracking-wide">
                                Shimu <span className="text-white">Paul</span>
                            </span>
                        </div>

                        <p className="mt-6 text-sm leading-6 text-gray-400 max-w-xs">
                            Junior Frontend Developer — I work with React, Tailwind, and accessible UI.
                            I love turning designs into fast, responsive, clean code.
                        </p>

                        <a
                            href="mailto:shimu.paul@example.com"
                            className="mt-6 inline-flex items-center gap-2 font-medium text-white hover:text-orange-400"
                        >
                            <FiMail className="text-orange-500" />
                            shimu.paul96@gmail.com
                        </a>
                    </div>


                    {/* Explore Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Explore Links
                        </h4>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li><a href="#about" className="hover:text-orange-400">About</a></li>
                            <li><Link to="/resume" className="hover:text-orange-400">Resume</Link></li>
                            <li><a href="#portfolio" className="hover:text-orange-400">Portfolio</a></li>
                            <li><Link to="/blog" className="hover:text-orange-400">Blog</Link></li>
                        </ul>
                    </div>

                    {/* My Services */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                            My Services
                        </h4>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li>UI/UX Design</li>
                            <li>Mobile App UI</li>
                            <li>Graphic Design</li>
                            <li>Web Development</li>
                        </ul>
                    </div>

                    {/* Follow me + contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Follow Me
                        </h4>

                        <div className="mt-6 flex items-center gap-3">
                            {/* GitHub */}
                            <a
                                href="https://github.com/yourgithub"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-500 transition"
                            >
                                <FaGithub />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/yourlinkedin"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-500 transition"
                            >
                                <FaLinkedin />
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://facebook.com/yourfb"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-500 transition"
                            >
                                <FaFacebook />
                            </a>






                        </div>



                        <ul className="mt-6 space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <FiMapPin className="mt-0.5 text-orange-500" />
                                <span>Uttara, sector-6, Dhaka</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FiPhone className="text-orange-500" />
                                <a href="tel:+18009156270" className="hover:text-orange-400">
                                    +88 00 1924549871
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-400 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p>All rights reserved © {new Date().getFullYear()} Shimu Paul</p>
                    <div className="flex items-center gap-6">
                        <Link to="/terms" className="hover:text-orange-400">Terms &amp; Conditions</Link>
                        <Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
