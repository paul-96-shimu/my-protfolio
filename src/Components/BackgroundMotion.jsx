import React from 'react';

import bg from '../assets/lottie/Celebrations Begin.json'
import Lottie from 'lottie-react';

const BackgroundMotion = () => {
    return (
        <div>
           <Lottie animationData={bg} loop={true} /> 
        </div>
    );
};

export default BackgroundMotion;