import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import HeaderNav from './HeaderNav';
import CartIcon from './icons/CartIcon';
import ProfileIcon from './icons/ProfileIcon';
import SearchBlock from './SearchBlock';

function Header() {
  const cart = useSelector(state => state.cart);
  return (
    <div className='col-left w-100 position-fixed pt-0 pb-0 bg-white'>
      <div className='logo_mb text-center p-1 bg-grey  d-lg-none'>
        <Link href='/gioi-thieu'>
          <a title='Mew Fashion' className='ml-2 '>
            <img
              alt='Mew Fashion'
              src='/images/logo.png'
              className='img-fluid lazy'
            />
          </a>
        </Link>
      </div>
      <div className='container position-relative'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-2 col-xl-3 d-none d-lg-block'>
            <Link href='/'>
              <a title='Mew Fashion' className='logo d-inline-block'>
                <img
                  alt='Mew Fashion'
                  src='/images/logo.png'
                  className='img-fluid lazy loaded'
                />
              </a>
            </Link>
          </div>
          <div className='col-12 col-lg-10 col-xl-9 d-lg-flex align-items-center position-static pr-menu'>
            <HeaderNav />
            <SearchBlock />
            <div className='navigation-bottom mt-auto mt-lg-0 d-none d-lg-block'>
              <div className='b_use d-flex align-items-stretch'>
                <div
                  id='js-login-toggle'
                  className='p-2 btn-account d-flex align-items-center justify-content-center'
                  title='Đăng ký/Đăng nhập'
                >
                  <ProfileIcon />
                  <div
                    id='m_login'
                    className='pop_login position-absolute p-3 text-center rounded'
                  >
                    <Link href='/account/login'>
                      <a className='item_login d-block pt-1 pb-1'>Đăng nhập</a>
                    </Link>
                    <Link href='/account/register'>
                      <a className='item_login d-block pt-1 pb-1'>Đăng ký</a>
                    </Link>
                  </div>
                </div>
                <Link href='/cart'>
                  <a
                    title='Giỏ hàng'
                    className='p-2 btn-cart position-relative d-inline-flex'
                  >
                    <CartIcon />
                    {cart.length > 0 && (
                      <span className='btn-cart-indicator position-absolute'>
                        {cart.length}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
