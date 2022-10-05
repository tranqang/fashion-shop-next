import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { categoryData } from '../data/data';
import DefaultLayout from '../layouts/DefaultLayout';

function Introduce() {
  const category = categoryData.find(category => category.type === 3);
  return (
    <DefaultLayout>
      <div className='container'>
        <BreadCrumb from='Trang chủ' to={category.name} />
        <h1 className='font-weight-bold text-center mt-3'>{category.name}</h1>
        <div className='rte m-auto bg-white p-4 d-block'>
          {category.desc.map((descItem, index) => (
            <p key={index}>{descItem}</p>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Introduce;
