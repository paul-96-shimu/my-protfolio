import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Shimu Paul. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://github.com/yourgithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourlinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://twitter.com/yourtwitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        Twitter
                    </a>
                    <a
                        href="mailto:youremail@example.com"
                        className="hover:text-white"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
