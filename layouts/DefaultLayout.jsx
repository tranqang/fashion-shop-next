import React, { useEffect } from 'react';
import BodyOverlay from '../components/BodyOverlay';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import MobileNav from '../components/MobileNav';
import MobileSubNav from '../components/MobileSubNav';
import BackTop from '../components/BackTop';
import FixedContact from '../components/FixedContact';
import { useDispatch } from 'react-redux';
import { reload } from '../redux/reducers/cartSlice';
function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const cart =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) ?? []
      : [];
  useEffect(() => {
    dispatch(reload(cart));
  }, []);
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
