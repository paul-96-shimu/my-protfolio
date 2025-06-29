import React from 'react';
import Hero from './Layouts/Hero';
import Abouts from './Abouts';
import Skills from './Skills';
import Education from './Layouts/Education';
import Experience from './Layouts/Experience';
import Project from './Layouts/Project';
import Footer from './Layouts/Footer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Abouts></Abouts>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Project></Project>
            <Footer></Footer>
        </div>

    );
};

export default Home;