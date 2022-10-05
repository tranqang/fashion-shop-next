import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Map from '../components/Map';
import StoreFilter from '../components/StoreFilter';
import { categoryData } from '../data/data';
import DefaultLayout from '../layouts/DefaultLayout';
function Store() {
  const category = categoryData.find(category => category.type === 4);
  return (
    <DefaultLayout>
      <div className='container'>
        <BreadCrumb from='Trang chủ' to={category.name} />
        <h1 className='font-weight-bold text-center mt-3'>{category.name}</h1>
        <div className='rte d-block mb-4'>
          {category.desc.map((descItem, index) => (
            <p key={index}>{descItem}</p>
          ))}
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
