import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import ClockIcon from './icons/ClockIcon';
import { productData } from '../data/data';
import Link from 'next/link';
import Slider from 'react-slick';
function ProductSlide({ title, data, ...options }) {
  const sliderRef = useRef();
  const { status, nav, items, time, responsive, spacing } = options;
  const productList = productData.filter(item => data.includes(item.id));
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    spacing: 15,
    slidesToShow: items,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive,
  };
  return (
    <div className='m_product col-12 mt-5 mb-5'>
      {title && (
        <h2 className='title mb-5 text-uppercase font-weight-bold text-center'>
          <Link href='/collection/all'>
            <a className='position-relative d-inline-block' title='FLASH SALE'>
              {title}
            </a>
          </Link>
        </h2>
      )}
      {time && (
        <>
          <div className='ml-auto text-center'>
            <div
              id='clock'
              data-end='07/24/2022 23:33'
              className='rounded d-inline-block countdown-time-wrapper text-uppercase font-weight-bold position-relative pt-2 pb-2 pb-lg-2 pl-3 pr-3 mt-0 mt-lg-1 mb-0 mb-lg-1 d-none'
            >
              <div className='countdown-text d-inline-flex align-items-baseline justify-content-center align-top mr-2'>
                <ClockIcon />
              </div>
              <div className='countdown-text text-white align-items-baseline justify-content-center align-top d-none d-md-inline-flex'>
                Thời gian:
              </div>
              <div className='text-white countdown-item pr-1 pl-1 rounded d-inline-flex align-items-baseline justify-content-center'>
                <div className='countdown-time  countdown-date mr-1 day'>
                  00
                </div>
                <div className='countdown-text'>Ngày</div>
              </div>
              <div className='text-white countdown-item pr-1 pl-1 rounded d-inline-flex align-items-baseline justify-content-center'>
                <div className='countdown-time position-relative hour'>00</div>
              </div>
              <div className='text-white countdown-item pr-1 pl-1  rounded d-inline-flex align-items-baseline justify-content-center'>
                <div className='countdown-time position-relative minute'>
                  00
                </div>
              </div>
              <div className='text-white countdown-item pr-1 pl-1  rounded d-inline-flex align-items-baseline justify-content-center'>
                <div className='countdown-time position-relative second'>
                  00
                </div>
              </div>
            </div>
          </div>
          <p className='text-center'>
            Hàng loạt bản mẫu. Hàng loạt cải tiến. Hàng loạt thử nghiệm.
          </p>
        </>
      )}
      <div className='b_product_1 swiper-container swiper-container-initialized swiper-container-horizontal'>
        {/* <div className='swiper-wrapper'> */}
        <Slider ref={sliderRef} {...settings}>
          {productList.map(product => (
            <ProductCard
              key={product.id}
              spacing={spacing}
              status={status}
              data={product}
            />
          ))}
        </Slider>
        {/* <Slider {...settings}>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
        >
          <h1>1</h1>
        </div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
        >
          <h1>2</h1>
        </div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
        >
          <h1>3</h1>
        </div>
      </Slider> */}

        {/* </div> */}
        <div
          className={`swiper-button-prev m_fl_prev ${
            nav ? '' : 'swiper-button-disabled'
          }`}
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
          tabIndex='0'
          role='button'
          aria-label='Previous slide'
          aria-disabled='false'
        ></div>

        <div
          className={`swiper-button-next m_fl_next ${
            nav ? '' : 'swiper-button-disabled'
          }`}
          onClick={() => {
            sliderRef.current.slickNext();
          }}
          tabIndex={0}
          role='button'
          aria-label='Next slide'
          aria-disabled='false'
        />
        <span
          className='swiper-notification'
          aria-live='assertive'
          aria-atomic='true'
        />
      </div>
    </div>
  );
}

export default ProductSlide;
