import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import Banner from '../components/Banner';
import IntroduceCard from '../components/IntroduceCard';
import DefaultLayout from '../layouts/DefaultLayout';
import { catalogData, newsData, brandData } from '../data/data';
import Link from 'next/link';
import NewsCard from '../components/NewsCard';
import Slider from 'react-slick';
import BrandCard from '../components/BrandCard';
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <DefaultLayout>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <Banner />
      {catalogData.map(catalog => (
        <IntroduceCard key={catalog.id} catalog={catalog} />
      ))}

      <div className='m_blog pb-lg-5 pt-lg-5 pt-3 pb-3'>
        <div className='container'>
          <h2 className='title mb-5 text-uppercase font-weight-bold text-center position-relative'>
            <Link href='/tin-tuc'>
              <a
                className='dinh position-relative d-inline-block'
                title='Tin tức - Sự kiện'
              >
                Tin tức - Sự kiện
              </a>
            </Link>
          </h2>
          <article className='row'>
            {newsData.slice(0, 4).map(news => (
              <div key={news.id} className='col-12 col-sm-6 col-md-6 col-lg-3'>
                <NewsCard news={news} />
              </div>
            ))}
          </article>
        </div>
      </div>
      <div className='m_brand pb-lg-5 pt-lg-4 pt-3 pb-3'>
        <div className='container'>
          <h3 className='title mb-5 text-uppercase font-weight-bold text-center position-relative'>
            <span className='position-relative d-inline-block'>
              Top Thương Hiệu
            </span>
          </h3>
          <div className='m_brand_slide swiper-container swiper-container-initialized swiper-container-horizontal'>
            <Slider {...settings}>
              {brandData.map(brand => (
                <div key={brand.id} className='item'>
                  <BrandCard brand={brand} />
                </div>
              ))}
            </Slider>
            <span
              className='swiper-notification'
              aria-live='assertive'
              aria-atomic='true'
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
