import Link from 'next/link';
import React from 'react';

function BreadCrumb({ from, to }) {
  return (
    <div className='breadcrumbs position-relative pt-1 pb-1'>
      <div className='inner position-relative'>
        <ul className='breadcrumb align-items-center pl-0 pr-0 m-0'>
          <li className='home'>
            <Link href='/' title='Mew Fashion'>
              {from}
            </Link>
            <img src='/images/right-arrow.png' alt='Mew Fashion' />
          </li>
          <li className='font-weight-bold'>{to}</li>
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumb;
