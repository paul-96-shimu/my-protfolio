import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router';

const MainLayOuts = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOuts;