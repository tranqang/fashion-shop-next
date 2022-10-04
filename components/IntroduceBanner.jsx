import Link from 'next/link';
import React from 'react';

function IntroduceBanner({ bgSrc, RTL, title, name, desc }) {
  return (
    <>
      <div className='bg_pr  position-absolute w-100 h-100 d-none d-lg-block'>
        <div
          className={`fix-image${RTL ? '' : '-left'} position-fixed h-100`}
          style={{
            backgroundImage: `url("${bgSrc}")`,
          }}
        ></div>
        <div className='m_infor text-center position-absolute p-5'>
          <div className='m_list'>
            <div className='m_bn'>
              <p className='subtitle mb-2 font-weight-bold text-uppercase'>
                {title}
              </p>
              <h3 className='title_banner mb-1 font-weight-bold text-uppercase'>
                {name}
              </h3>
              <div className='description mb-3'>{desc}</div>
              <span className='see-more'>
                <Link href='/'>
                  <a className='p-1 pl-3 b-1 pr-3 border color-w rounded'>
                    Xem thêm
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg_pr position-absolute w-100 h-100  d-lg-none'>
        <div className='position-relative w-100 m-0 ratio1by1 has-edge aspect d-none d-md-block d-lg-none'>
          <img
            src={bgSrc}
            className='lazy d-block img img-cover position-absolute'
            alt='FLASH SALE'
          />
        </div>
        <div className='m_infor no_bg text-center position-absolute p-3'>
          <div className='m_list'>
            <div className='m_bn'>
              <p className='subtitle mb-2 font-weight-bold text-uppercase'>
                {title}
              </p>
              <h3 className='title_banner mb-3 font-weight-bold text-uppercase'>
                {name}
              </h3>
              <div className='description mb-3'>{desc}</div>
              <span className='see-more'>
                <Link href='/'>
                  <a className='p-1 pl-3 b-1 pr-3 border color-w d-inline-block rounded'>
                    Xem thêm
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroduceBanner;
