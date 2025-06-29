import React from 'react';

const Abouts = () => {
    return (
        <section
            id="about"
            className="max-w-3xl mx-auto py-20 px-4 text-center"
        >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed text-white">
                I am <strong>Shimu Paul</strong>, a Full Stack Developer. My programming journey started with HTML and CSS. Later, I learned JavaScript and React. Then I picked up backend development using Node.js and MongoDB. I love solving problems through coding.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white">
                Outside programming, I enjoy painting, playing badminton, and listening to new music.
            </p>
        </section>
    );
};

export default Abouts;