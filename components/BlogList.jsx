import React from 'react';
import Link from 'next/link';
import BlogItem from '../components/BlogItem';
function BlogList({ hot, title, padding, bg, newsList, url }) {
  const blogListStyle = {
    backgroundColor: bg,
  };
  return (
    <div className={`aside-item mb-2 p-${padding}`} style={blogListStyle}>
      <div className='heading mb-2 d-flex align-items-center border-bottom pb-2'>
        <div className='h2 title-head m-0 pt-2 pb-2 font-weight-bold'>
          <Link href={url}>
            <a
              style={{
                textTransform: 'uppercase',
              }}
              className='banner-w modal-open'
              title={title}
            >
              {title}
            </a>
          </Link>
        </div>
      </div>
      <div className='list-blogs'>
        {newsList.map((news, index) => (
          <BlogItem key={news.id} hot={hot} number={index + 1} news={news} />
        ))}
      </div>
      <div className='blogs-mores text-center'>
        <Link href={url}>
          <a title='Xem thêm'>Xem thêm</a>
        </Link>
      </div>
    </div>
  );
}

export default BlogList;
