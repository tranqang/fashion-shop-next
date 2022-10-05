import Link from 'next/link';
import React from 'react';

function Toast() {
  return (
    <div id='toast-container' className='toast-top-right'>
      <div
        className='toast toast-success'
        aria-live='polite'
        style={{ opacity: '0.798508' }}
      >
        <button type='button' className='toast-close-button' role='button'>
          ×
        </button>
        <div className='toast-title'>Thành công</div>
        <div className='toast-message'>
          Sản phẩm Áo thun T-shirt M-F 08 - M / Vàng đã được thêm vào giỏ.{' '}
          <Link href='/cart'>
            <a title='Giỏ hàng' className='d-block'>
              [Tới giỏ hàng]
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Toast;
