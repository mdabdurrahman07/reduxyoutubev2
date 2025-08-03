import React from 'react';
import Navigation from "../components/Navigation"
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer"
const Root = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;