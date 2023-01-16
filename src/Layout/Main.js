import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../Components/TopNav/TopNav';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;