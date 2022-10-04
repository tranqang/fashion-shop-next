import Link from 'next/link';
import IntroduceBanner from './IntroduceBanner';
import ProductSlide from './ProductSlide';

function IntroduceCard({ catalog }) {
  const { RTL, bgSrc, title, name, desc } = catalog;
  const props = { RTL, bgSrc, title, name, desc };
  const options = {
    status: catalog.status,
    time: catalog.time,
    nav: true,
    items: 3,
    spacing: 5,
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   576: {
    //     items: 2,
    //   },
    //   992: {
    //     items: 3,
    //   },
    // },
  };
  return catalog.RTL ? (
    <div className='m_product'>
      <div className='row  m-0'>
        <div className='col-lg-6 col-12 order-lg-2 ratio1by2 min-800'>
          <IntroduceBanner {...props} />
        </div>
        <div className='col-lg-6 col-12 ratio1by2 order-lg-1 position-relative min-800 mt-lg-0 mt-md-5 mt-0'>
          <div className='align-content position-absolute m_pr'>
            <ProductSlide
              title={catalog.name}
              {...options}
              data={catalog.product}
            />
            <span className='seemore d-block text-center border-top pt-2 mt-2'>
              <Link href='/collections/all'>
                <a className='font-weight-bold'>Xem thêm</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='m_product'>
      <div className='row  m-0'>
        <div className='col-lg-6 col-12 order-lg-1 ratio1by2 min-800'>
          <IntroduceBanner {...props} />
        </div>
        <div className='col-lg-6 col-12 ratio1by2 order-lg-2 position-relative modal-open min-800'>
          <div className='align-content position-absolute m_pr'>
            <ProductSlide
              title={catalog.name}
              {...options}
              data={catalog.product}
            />
            <span className='seemore d-block text-center border-top pt-2 mt-2'>
              <Link href='/collections/all'>
                <a className='font-weight-bold'>Xem thêm</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroduceCard;
