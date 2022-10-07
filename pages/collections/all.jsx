import React, { useState } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import BreadCrumb from '../../components/BreadCrumb';
import Pagination from '../../components/Pagination';
import ProductCard from '../../components/ProductCard';
import BlogList from '../../components/BlogList';
import Sort from '../../components/Sort';
import { useRouter } from 'next/router';
import { categoryData, menuData, newsData, productData } from '../../data/data';
import Link from 'next/link';
import FilterList from '../../components/FilterList';
import { useSelector } from 'react-redux';
function All() {
  const router = useRouter();
  const filter = useSelector(state => state.filter);
  const priceFilter = filter.find(current => current.parentId === 2);
  const currentPage = router.query.page - 0 || 1;
  const totalProduct = priceFilter
    ? productData.filter(
        product =>
          product.average_price >= priceFilter.key[0] &&
          product.average_price <= priceFilter.key[1]
      )
    : productData;
  const totalPage = Math.ceil(totalProduct.length / 6);
  const productDisplay = totalProduct.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );
  const newsDataSorted = newsData.sort((a, b) => b.rating - a.rating);
  const childrenCategory = categoryData.filter(category => category.type === 2);
  return (
    <DefaultLayout>
      <div className='container'>
        <BreadCrumb from='Trang chủ' to='Tất cả sản phẩm' />
        <div className='m_colection pt-3'>
          <h1>Tất cả sản phẩm</h1>
          <div className='desc'>
            Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần
            sẽ được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những
            sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của
            mình.
          </div>
          <ul className='cate_list w-100 d-none d-lg-flex flex-wrap list-unstyled m-auto sortPagiBar pb-4 border-bottom pt-4'>
            {childrenCategory.map(child => (
              <li key={child.id} className='ml-2 mr-2 mb-2'>
                <Link href={`/collections/${child.slug}`}>
                  <a className=' text-center font-weight-bold text-uppercase text-white line_1'>
                    {child.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className='row align-items-baseline mt-3'>
            <div className='col-12 col-lg-9 order-lg-2'>
              <Sort />
              <div className='collection'>
                <div className='category-products position-relative mt-4 mb-4'>
                  <div className='row slider-items'>
                    {productDisplay.map(product => (
                      <div
                        key={product.id}
                        className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'
                      >
                        <ProductCard data={product} />
                      </div>
                    ))}
                  </div>
                  <Pagination currentPage={currentPage} totalPage={totalPage} />
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3 order-lg-1 stk-pro'>
              <div className='align-items-center'>
                <FilterList />
                <BlogList
                  url='/'
                  title='Bài viết nối bật'
                  padding={0}
                  bg='#fff'
                  newsList={newsDataSorted.filter(
                    news => news.categoryId === 1
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default All;
