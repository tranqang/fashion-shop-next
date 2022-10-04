import React from 'react';
import BlogCard from '../../components/BlogCard';
import BreadCrumb from '../../components/BreadCrumb';
import BlogList from '../../components/BlogList';
import { newsData } from '../../data/data';
import DefaultLayout from '../../layouts/DefaultLayout';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';
function News() {
  const newsDataSorted = newsData.sort((a, b) => b.rating - a.rating);
  const router = useRouter();
  const currentPage = router.query.page - 0 || 1;

  return (
    <DefaultLayout>
      <div className='container pb-3'>
        <BreadCrumb from='Trang chủ' to='Tin tức' />
        <div className='row pt-3'>
          <div className='col-xl-8 col-lg-8 col-12'>
            <div className='blog-only'>
              <BlogCard news={newsDataSorted[0]} />
            </div>
            <article className='row'>
              <div className='col-12 col-xs-6 col-sm-6 col-lg-6 col-xl-6'>
                <BlogCard size='sm' news={newsDataSorted[1]} />
              </div>
              <div className='col-12 col-xs-6 col-sm-6 col-lg-6 col-xl-6'>
                <BlogCard size='sm' news={newsDataSorted[2]} />
              </div>
            </article>
            <Pagination currentPage={currentPage} totalPage={4} />
          </div>
          <div className='col-xl-4 col-lg-4 col-12'>
            <div className='stk-pro'>
              <BlogList
                url='/tin-tuc/su-kien'
                hot
                title='Tin tức & sự kiện'
                padding={3}
                newsList={newsDataSorted.filter(news => news.categoryId === 2)}
              />
              <BlogList
                url='/tin-tuc/kinh-nghiem-phoi-do'
                title='Bài viết nổi bật'
                padding={3}
                newsList={newsDataSorted.filter(news => news.categoryId === 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default News;
