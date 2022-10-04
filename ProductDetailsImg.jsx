import Link from 'next/link';
import React, { useRef } from 'react';

function ProductDetailsImg({ imageList }) {
  const sliderRef = useRef();
  return (
    <>
      <div className='product-main-slide mb-4 stk-pro'>
        <div className='row m_more d-none js-product-image-list d-lg-flex remove_html_mobi'>
          {imageList.images &&
            imageList.images.map((image, index) => (
              <div
                key={index}
                className='product-image col-lg-6 col-12 mb-4 image'
              >
                <Link href='#'>
                  <a
                    className='position-relative d-block aspect ratio3by4 modal-open'
                    title={image}
                  >
                    <img
                      src={image}
                      alt={image}
                      className='d-block img position-absolute img-contain lazy loaded'
                      id='img_49905244'
                    />
                  </a>
                </Link>
              </div>
            ))}
          {/* <div className='product-image col-lg-6 col-12 mb-4 image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Áo thun T-shirt M-F 08 '
            >
              <img
                src={images.imgProduct8_3}
                alt='Áo thun T-shirt M-F 08 '
                className='d-block img position-absolute img-contain lazy loaded'
                id='img_49905244'
              />
            </Link>
          </div>
          <div className='product-image col-lg-6 col-12 mb-4 image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Áo thun T-shirt M-F 08 '
            >
              <img
                src={images.imgProduct8_3}
                alt='Áo thun T-shirt M-F 08 '
                className='d-block img position-absolute img-contain lazy loaded'
                id='img_49905244'
              />
            </Link>
          </div>
          <div className='product-image col-lg-6 col-12 mb-4 image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Áo thun T-shirt M-F 08 '
            >
              <img
                src={images.imgProduct8_3}
                alt='Áo thun T-shirt M-F 08 '
                className='d-block img position-absolute img-contain lazy loaded'
                id='img_49905244'
              />
            </Link>
          </div>
          <div className='product-image col-lg-6 col-12 mb-4 image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Áo thun T-shirt M-F 08 '
            >
              <img
                src={images.imgProduct8_3}
                alt='Áo thun T-shirt M-F 08 '
                className='d-block img position-absolute img-contain lazy loaded'
                id='img_49905244'
              />
            </Link>
          </div>
          <div className='product-image col-lg-6 col-12 mb-4 image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Áo thun T-shirt M-F 08 Trắng'
            >
              <img
                src={images.imgProduct8_7}
                alt='Áo thun T-shirt M-F 08 Trắng'
                className='d-block img position-absolute img-contain lazy loaded'
                id='img_44674977'
              />
            </Link>
          </div>
          <div className='product-image col-lg-6 col-12 mb-4 image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Áo thun T-shirt M-F 08 Trắng'
            >
              <img
                src={images.imgProduct8_7}
                alt='Áo thun T-shirt M-F 08 Trắng'
                className='d-block img position-absolute img-contain lazy loaded'
                id='img_44674977'
              />
            </Link>
          </div>
          <div className='product-image col-lg-6 col-12 mb-4 image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Áo thun T-shirt M-F 08 Trắng'
            >
              <img
                src={images.imgProduct8_7}
                alt='Áo thun T-shirt M-F 08 Trắng'
                className='d-block img position-absolute img-contain lazy loaded'
                id='img_44674977'
              />
            </Link>
          </div> */}
          {/* <div className='col-lg-6 image js-more-image'>
            <Link
              href='#'
              className='position-relative d-block aspect ratio3by4 modal-open'
              title='Trắng'
            >
              <img
                src={images.imgProduct8_7}
                alt='Trắng'
                className='d-block img position-absolute w-100 h-100 img-contain lazy loaded'
              />
              <div className='plus_img position-absolute d-flex justify-content-center align-items-center imageCount w-100 h-100'>
                +3
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      {/* <div className='product-thumb-slide swiper-container position-relative cursor-pointer d-lg-none swiper-container-initialized swiper-container-horizontal'>
        <div className='swiper-wrapper'>
          <ReactOwlCarousel
            ref={sliderRef}
            className='owl-theme'
            items={1}
            margin={15}
            dots={false}
            smartSpeed={500}
            loop
          >
            <div className='item'>
              <div className='item-image position-relative w-100 m-0 aspect ratio1by1 modal-open'>
                <img
                  src={images.imgProduct8_7}
                  alt='Áo thun T-shirt M-F 08 '
                  className='d-block img position-absolute img-contain'
                  id='img_49905244'
                />
              </div>
            </div>
            <div className='item'>
              <div className='item-image position-relative w-100 m-0 aspect ratio1by1 modal-open'>
                <img
                  src={images.imgProduct8_7}
                  alt='Áo thun T-shirt M-F 08 '
                  className='d-block img position-absolute img-contain'
                  id='img_49905244'
                />
              </div>
            </div>
            <div className='item'>
              <div className='item-image position-relative w-100 m-0 aspect ratio1by1 modal-open'>
                <img
                  src={images.imgProduct8_7}
                  alt='Áo thun T-shirt M-F 08 '
                  className='d-block img position-absolute img-contain'
                  id='img_49905244'
                />
              </div>
            </div>
            <div className='item'>
              <div className='item-image position-relative w-100 m-0 aspect ratio1by1 modal-open'>
                <img
                  src={images.imgProduct8_7}
                  alt='Áo thun T-shirt M-F 08 '
                  className='d-block img position-absolute img-contain'
                  id='img_49905244'
                />
              </div>
            </div>
          </ReactOwlCarousel>
        </div>
        <div
          onClick={() => owlRef.current.prev()}
          className='swiper-button-prev'
        />
        <div
          onClick={() => owlRef.current.next()}
          className='swiper-button-next'
        />
        <span
          className='swiper-notification'
          aria-live='assertive'
          aria-atomic='true'
        />
      </div> */}
    </>
  );
}

export default ProductDetailsImg;
