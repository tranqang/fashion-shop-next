import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '../../layouts/DefaultLayout';
import SizeModal from '../../components/SizeModal';
import BreadCrumb from '../../components/BreadCrumb';
import ProductSlide from '../../components/ProductSlide';
import GiftCard from '../../components/GiftCard';
import InfoCard from '../../components/InfoCard';
import Link from 'next/link';
import { productData } from '../../data/data';
import ProductFormSelect from '../../components/ProductFormSelect';
import ProductDetailsImg from '../../ProductDetailsImg';
function ProductDetail() {
  const router = useRouter();
  const productId = router.query['product-id'] - 0;
  const [showModal, setShowModal] = useState(false);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [productDetail, setProductDetail] = useState({});
  const [colorSelect, setColorSelect] = useState({ color: null });
  const [productImg, setProductImg] = useState({});
  useEffect(() => {
    const product = productData.find(product => product.id === productId - 0);
    setProductDetail(product);
    const related = product
      ? productData
          .filter(
            current =>
              current.categoryId === product.categoryId &&
              current.id !== product.id
          )
          .map(item => item.id)
      : [];
    setRelatedProduct(related);
  }, [productId]);
  useEffect(() => {
    if (productDetail.color_image) {
      setProductImg(
        productDetail.color_image.find(item => item.color === colorSelect.color)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorSelect]);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const options = {
    status: false,
    nav: false,
    items: 4,
    spacing: 10,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <DefaultLayout>
      {productDetail && (
        <div className='container'>
          <BreadCrumb from='Trang chủ' to='Áo thun T-shirt M-F 08' />
          <div className='row clearfix mb-4 pt-3'>
            <div className='product-layout_col-left col-12 col-lg-7 col-xl-8 mb-lg-0 mb-3'>
              <ProductDetailsImg imageList={productImg} />
            </div>
            <div className='product-layout_col-right col-12 col-lg-5 col-xl-4 product-warp'>
              <div className='stk-pro'>
                <h1 className='product-name font-weight-bold text-uppercase'>
                  {productDetail.name}
                </h1>

                <ProductFormSelect
                  product={productDetail}
                  colorSelect={colorSelect}
                  setColorSelect={setColorSelect}
                />
                <div className='product_size_guide d-flex  pt-3 pb-3'>
                  <Link href='#'>
                    <a
                      onClick={() => setShowModal(true)}
                      title='Bạn biết chọn size chuẩn của mình chưa?'
                    >
                      + Bạn biết chọn size chuẩn của mình chưa?
                    </a>
                  </Link>
                </div>
                <div className='product-content rte'>
                  <div className='panel-group' id='accordion'>
                    <GiftCard />
                    <InfoCard details />
                    <InfoCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row clearfix bg-white pt-4'>
            <ProductSlide
              {...options}
              title='Sản phẩm liên quan'
              data={relatedProduct}
            />
          </div>
          {showModal && <SizeModal setShowModal={setShowModal} />}
        </div>
      )}
    </DefaultLayout>
  );
}

export default ProductDetail;
