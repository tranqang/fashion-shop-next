import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Map from '../components/Map';
import StoreFilter from '../components/StoreFilter';
import DefaultLayout from '../layouts/DefaultLayout';
function Store() {
  return (
    <DefaultLayout>
      <div className='container'>
        <BreadCrumb from='Trang chủ' to='Hệ thống cửa hàng' />
        <h1 className='font-weight-bold text-center mt-3'>Hệ thống cửa hàng</h1>
        <div className='rte d-block mb-4'>
          <p>
            MEWFASHION cửa hàng cung các mặt hàng thời trang chính hãng với hơn
            3 năm kinh nghiệm trong lĩnh vực bán buôn , phân phối và bán lẻ
            <br />
            Trong hơn 2 năm 2019-2021 chúng tôi hãnh diện là nhà phân phối , bán
            lẻ hàng chính hãng có tiếng ở VN , đã cung cấp rất nhiều sản phẩm
            cho người nổi tiếng , các cửa hàng có tiếng và mang đến quý khách
            hàng sản phẩm chính hãng , hơn thế nữa cung cấp chế độ đổi theo giúp
            cho quý khách yên tâm sử dụng sản phẩm.
          </p>
        </div>
        <div className='rte mb-4'>
          {/* <div className='cssload-loader'>Đang tải bản đồ</div> */}
          <div className='sectionContentStore row' style={{}}>
            <div className='col-12 col-md-4'>
              <StoreFilter />
            </div>
            <div className='col-12 col-md-8'>
              <Map width='100%' height='100%' />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Store;
