import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Nature } from '../Pic/Pic'; // Assume this is the image file you want to use.

const MainLayout = () => {
  return (
    <div
      className="main-layout"
      style={{
        backgroundImage: `url(${Nature})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className="fixed-header col-md-12 col-lg-12 col-sm-12">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div className='col-md-12 col-lg-12 col-sm-12'>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;