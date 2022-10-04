import Link from 'next/link';
import React from 'react';
import CartIcon from './icons/CartIcon';
import ContactNav from './ContactNav';
import HomeIcon from './icons/HomeIcon';
import MenuIcon from './icons/MenuIcon';
import PhoneIcon from './icons/PhoneIcon';
import ProfileIcon from './icons/ProfileIcon';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../redux/reducers/toggleSlice';

function MobileNav() {
  const contactState = useSelector(state => state.toggle.contact);
  const mobileSubnavState = useSelector(state => state.toggle.mobile_subnav);
  const dispatch = useDispatch();
  return (
    <>
      <div className='d-lg-none d-flex mew_mobi_bar w-100'>
        <Link href='/'>
          <a
            title='Trang chủ'
            className='item d-flex flex-column align-items-center p-1 justify-content-center  active'
          >
            <HomeIcon />
            Trang chủ
          </a>
        </Link>

        <Link href='/account/login'>
          <a
            className='item d-flex flex-column p-1 btn-account align-items-center justify-content-center'
            title='Tài khoản của tôi'
          >
            <ProfileIcon />
            Đăng nhập
          </a>
        </Link>

        <Link href='#'>
          <a
            onClick={() => {
              dispatch(show({ key: 'contact', value: !contactState }));
              dispatch(show({ key: 'mobile_subnav', value: false }));
            }}
            id='support'
            className='item d-flex flex-column p-1 btn-support align-items-center justify-content-center'
            title='Liên hệ'
          >
            <PhoneIcon />
            Hỗ trợ
          </a>
        </Link>
        <ContactNav />
        <Link href='/cart'>
          <a
            className='item d-flex flex-column p-1 align-items-center justify-content-center btn-cart position-relative  '
            title='Giỏ hàng'
          >
            <span className='position-relative flex-column d-flex'>
              <CartIcon />
              Giỏ hàng
              <span className='btn-cart-indicator text-center position-absolute d-none align-items-center justify-content-center'></span>
            </span>
          </a>
        </Link>
        <Link href='/#'>
          <a
            className='item d-flex flex-column align-items-center justify-content-center menu-toggle  p-1 '
            id='js-menu-toggle'
            onClick={() => {
              dispatch(
                show({ key: 'mobile_subnav', value: !mobileSubnavState })
              );
              dispatch(show({ key: 'contact', value: false }));
              dispatch(show({ key: 'search', value: false }));
            }}
          >
            <MenuIcon />
            Menu
          </a>
        </Link>
      </div>
    </>
  );
}

export default MobileNav;
