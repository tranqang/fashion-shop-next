import React from 'react';
import Link from 'next/link';

function BlogCard({ size, news }) {
  return (
    <div className='item_bl position-relative pb-3 mb-3'>
      <div className='blog entry-content p-0 position-relative d-block'>
        <Link href={`/tin-tuc/${news.id}`}>
          <a
            className='w-100 ratio1by2 has-edge aspect modal-open d-block i_bl position-relative effect-ming text-center'
            title={news.title}
          >
            <img
              className='d-block img-cover position-absolute lazy loaded'
              src={news.image}
              alt={news.title}
            />
            <div className='position-absolute w-100 h-100 overlay' />
          </a>
        </Link>
        <div className='blog-inf p-3 aside-item'>
          <h3 className='title_blo line_2 font-weight-bold small m-0'>
            <Link href={`/tin-tuc/${news.id}`}>
              <a title={news.title}>{news.title}</a>
            </Link>
          </h3>
          <span className={`entry-date ${size === 'sm' && 'small'}`}>
            {news.date}
          </span>
          <div className={`modal-open row-limit-4 ${size === 'sm' && 'small'}`}>
            {news.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
