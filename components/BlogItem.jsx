import React from 'react';
import Link from 'next/link';
function BlogItem({ hot, number, news }) {
  return (
    <article className='blog-item blog-item-list clearfix mb-4'>
      <Link href={`/tin-tuc/${news.id}`}>
        <a
          className={`panel-box-media banner-w modal-open position-relative ${
            hot ? 'blog-hot' : ''
          }`}
          title={news.title}
        >
          {hot ? (
            <span className='number'>
              <i className={`num-${number}`} />
            </span>
          ) : (
            <img src={news.image} className='lazy loaded' alt={news.title} />
          )}
        </a>
      </Link>
      <div className={`blogs-rights  ${hot ? 'hot-rights' : ''}`}>
        <h3 className='blog-item-name font-weight-bold line_2'>
          <Link href={`/tin-tuc/${news.id}`}>
            <a title={news.title}>{news.title}</a>
          </Link>
        </h3>
        <div className='post-time'>Ngày đăng: {news.date}</div>
      </div>
    </article>
  );
}

export default BlogItem;
