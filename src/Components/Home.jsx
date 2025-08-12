import React from 'react';
import Hero from './Layouts/Hero';
import Abouts from './Abouts';
import Skills from './Skills';
import Education from './Layouts/Education';

import Project from './Layouts/Project';
import Footer from './Layouts/Footer';
import Contact from './Layouts/Contact';
import BackgroundMotion from './BackgroundMotion';

const Home = () => {
    return (
        <div className="">

             {/* <div className="absolute inset-0 -z-10">
                <BackgroundMotion />
            </div> */}

          
            <Hero></Hero>
            <Abouts></Abouts>
            <Skills></Skills>
            <Education></Education>
          

            <Project></Project>


              <Contact></Contact>
            <Footer></Footer>
        </div>

    );
};

export default Home;