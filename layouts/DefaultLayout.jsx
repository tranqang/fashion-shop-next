import React from 'react';
import BodyOverlay from '../components/BodyOverlay';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import MobileNav from '../components/MobileNav';
import MobileSubNav from '../components/MobileSubNav';
import BackTop from '../components/BackTop';
import FixedContact from '../components/FixedContact';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <MobileHeader />
      <BodyOverlay />
      <div className='col-right'>
        {children}
        <Footer />
      </div>
      <MobileNav />
      <MobileSubNav />
      <BackTop />
      <FixedContact />
    </>
  );
}

export default DefaultLayout;
