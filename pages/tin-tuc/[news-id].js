import React from 'react';
import { newsData } from '../../data/data';
import DefaultLayout from '../../layouts/DefaultLayout';
import BlogCard from '../../components/BlogCard';
import BlogList from '../../components/BlogList';
import BreadCrumb from '../../components/BreadCrumb';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NewsDetails() {
  const router = useRouter();
  const news = newsData.find(news => news.id === router.query['news-id'] - 0);
  console.log(news);
  const newsDataSorted = newsData.sort((a, b) => b.rating - a.rating);
  return (
    <DefaultLayout>
      <div className='container pb-3 col-12'>
        <BreadCrumb from='Trang chủ' to='Tin tức' />
        <div className='row pt-3'>
          <div className='col-main col-md-8 col-12 p-3 p-md-4'>
            <h1 className='title_art font-weight-bold mb-3 pb-3 border-bottom'>
              {news && news.title}
            </h1>
            <article className='blog_entry clearfix'>
              <div className='entry-content rte'>
                <p style={{ textAlign: 'justify' }}>{news && news.content}</p>
              </div>
              <div className='relate_art'>
                <h3 className='title-head font-weight-bold mb-2'>
                  <Link href='/tin-tuc'>
                    <a
                      className='banner-w modal-open'
                      title='Bài viết liên quan:'
                    >
                      Bài viết liên quan:
                    </a>
                  </Link>
                </h3>
                <div className='list-blogs pb-2'>
                  <div className='blog-item clearfix mb-2 relate_item'>
                    <Link href='/thoi-trang-sao-nam-mac-dep-tuan-4-thang-4-2021'>
                      <a
                        className='blog-item-name position-relative d-inline-block'
                        title='Thời trang sao nam mặc đẹp tuần 4 tháng 4/2021'
                      >
                        Thời trang sao nam mặc đẹp tuần 4 tháng 4/2021
                      </a>
                    </Link>
                  </div>
                  <div className='blog-item clearfix mb-2 relate_item'>
                    <Link href='/ngam-nhin-thoi-trang-tham-do-an-tuong-tai-oscar-2021'>
                      <a
                        className='blog-item-name position-relative d-inline-block'
                        title='Ngắm nhìn thời trang thảm đỏ ấn tượng tại Oscar 2021'
                      >
                        Ngắm nhìn thời trang thảm đỏ ấn tượng tại Oscar 2021
                      </a>
                    </Link>
                  </div>
                  <div className='blog-item clearfix mb-2 relate_item'>
                    <Link href='/goi-y-tips-phoi-do-cho-nguoi-mang-hoa'>
                      <a
                        className='blog-item-name position-relative d-inline-block'
                        title='Gợi ý tips phối đồ cho người mạng Hỏa'
                      >
                        Gợi ý tips phối đồ cho người mạng Hỏa
                      </a>
                    </Link>
                  </div>
                  <div className='blog-item clearfix mb-2 relate_item'>
                    <Link href='/thoi-trang-sao-nam-mac-dep-tuan-dau-thang-5-2021'>
                      <a
                        className='blog-item-name position-relative d-inline-block'
                        title='Thời trang sao nam mặc đẹp tuần đầu tháng 5/2021'
                      >
                        Thời trang sao nam mặc đẹp tuần đầu tháng 5/2021
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
            <div className='pl-2 pr-2 pl-lg-0 pr-lg-0 pt-4 pb-4 border-top main_bor'>
              <div className='comment-content widget_b row' id='comments'>
                <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
                  <div className='comments-form-wrapper clearfix'>
                    <h3
                      id='add-comment-title'
                      className='title widget-title text-center mb-4'
                    >
                      <span
                        className='text-special position-relative'
                        title='Viết bình luận'
                      >
                        Viết bình luận
                      </span>
                    </h3>
                    {news && (
                      <form
                        acceptCharset='utf-8'
                        action={`/posts/${news.id}/comments`}
                        id='article_comments'
                        method='post'
                        className='comment-form'
                      >
                        <input
                          name='FormType'
                          type='hidden'
                          defaultValue='article_comments'
                        />
                        <input name='utf8' type='hidden' defaultValue='true' />
                        <div className='row'>
                          <div className='col-12 form-group'>
                            <input
                              type='text'
                              className='form-control bg-black '
                              placeholder='Tên*'
                              title='Tên'
                              id='user'
                              name='Author'
                            />
                          </div>
                          <div className='col-12 form-group'>
                            <input
                              className='form-control bg-black '
                              title='Email'
                              id='email'
                              type='email'
                              placeholder='Email*'
                              name='Email'
                            />
                          </div>
                        </div>
                        <div className='field aw-blog-comment-area form-group'>
                          <textarea
                            rows={6}
                            cols={50}
                            className='form-control bg-black '
                            title='Bình luận'
                            placeholder='Bình luận*'
                            id='comment'
                            name='Body'
                            defaultValue={''}
                          />
                        </div>
                        <div style={{ width: '96%' }} className='button-set'>
                          <input
                            type='hidden'
                            defaultValue={1}
                            name='blog_id'
                          />
                          <button
                            type='submit'
                            className='book-submit btn btn-primary text-center d-flex  align-items-center font-weight-boldt font-weight-bold'
                          >
                            Gửi bình luận
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='comments-wrapper mb-4'>
                    <h3 className='title widget-title text-center mb-4'>
                      <span
                        className='text-special position-relative'
                        title='Bình luận'
                      >
                        Bình luận
                      </span>
                    </h3>
                    <p className='alert alert-warning'>
                      Hiện tại bài viết này chưa có bình luận.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-12'>
            <div className='stk-pro'>
              <BlogList
                url='/'
                hot
                title='Tin tức & sự kiện'
                padding={3}
                newsList={newsDataSorted.filter(news => news.categoryId === 2)}
              />
              <BlogList
                url='/'
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

export default NewsDetails;
