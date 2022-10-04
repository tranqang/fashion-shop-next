import Link from 'next/link';
import React from 'react';

function MobileHeader() {
  return (
    <div className='menubar pr-2 w-100 text-right d-flex d-lg-none position-fixed align-items-center    '>
      <Link href='/'>
        <a title='Mew Fashion' className='ml-2 logo d-inline-block'>
          <img
            alt='Mew Fashion'
            src='/images/logo.png'
            className='img-fluid '
          />
        </a>
      </Link>
    </div>
  );
}

export default MobileHeader;
