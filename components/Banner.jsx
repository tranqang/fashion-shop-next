import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <>
      <Slider {...settings}>
        <Link href='/#'>
          <a className='d-block w-100 h-100' title='Mew Fashion'>
            <img
              className='d-block w-100 h-100'
              src='/images/slide-img1.webp'
              alt='Mew Fashion'
            />
          </a>
        </Link>
        <Link href='/#'>
          <a className='d-block w-100 h-100' title='Mew Fashion'>
            <img
              className='d-block w-100 h-100'
              src='/images/slide-img2.webp'
              alt='Mew Fashion'
            />
          </a>
        </Link>
      </Slider>
    </>
  );
}

export default Banner;
