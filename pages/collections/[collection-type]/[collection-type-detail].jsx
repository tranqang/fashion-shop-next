import React, { useState } from 'react';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { useRouter } from 'next/router';
import {
  categoryData,
  menuData,
  newsData,
  productData,
} from '../../../data/data';
import FilterList from '../../../components/FilterList';
import BlogList from '../../../components/BlogList';
import Pagination from '../../../components/Pagination';
import ProductCard from '../../../components/ProductCard';
import Link from 'next/link';
import BreadCrumb from '../../../components/BreadCrumb';
import Sort from '../../../components/Sort';
import { useSelector } from 'react-redux';

function CollectionTypeDetail() {
  const router = useRouter();
  const collectionType = router.query['collection-type'];
  const collectionTypeDetail = router.query['collection-type-detail'];
  const currentCategory = categoryData.find(
    category => category.slug === collectionType
  );
  const currentCategoryChild =
    currentCategory &&
    currentCategory.children.find(child => child.slug === collectionTypeDetail);

  const filter = useSelector(state => state.filter);
  const priceFilter = filter.find(current => current.parentId === 2);
  const newsDataSorted = newsData.sort((a, b) => b.rating - a.rating);
  const currentPage = router.query.page - 0 || 1;
  const productList = priceFilter
    ? productData
        .filter(
          product =>
            product.average_price >= priceFilter.key[0] &&
            product.average_price <= priceFilter.key[1]
        )
        .filter(product => currentCategoryChild.id === product.categoryId)
    : productData.filter(
        product => currentCategoryChild.id === product.categoryId
      );
  console.log(productList);
  const totalPage = Math.ceil(productList.length / 6);
  const productDisplay = productList.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );
  return (
    <DefaultLayout>
      {currentCategoryChild && (
        <div className='container'>
          <BreadCrumb from='Trang chủ' to={currentCategoryChild.name} />
          <div className='m_colection pt-3'>
            <h1>{currentCategoryChild.name}</h1>
            <div className='desc'>{currentCategoryChild.desc}</div>
            <ul className='cate_list w-100 d-none d-lg-flex flex-wrap list-unstyled m-auto sortPagiBar pb-4 border-bottom pt-4'></ul>
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
                    <Pagination
                      currentPage={currentPage}
                      totalPage={totalPage}
                    />
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
      )}
    </DefaultLayout>
  );
}

export default CollectionTypeDetail;
