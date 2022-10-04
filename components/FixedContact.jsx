import Link from 'next/link';
import React from 'react';

function FixedContact() {
  return (
    <div className='fix-phone p-1 p-lg-2' id='mb_contact'>
      <Link href='tel:19006750'>
        <a
          title='Gọi ngay'
          className='play0 phone-box m-auto ml-lg-1 mr-lg-1 d-flex align-items-center justify-content-center'
        >
          <img
            className='d-lg-block lazy loaded'
            src='/images/telephone.png'
            alt='Mew Fashion'
          />
        </a>
      </Link>
      <Link href='https://m.me/mewtheme'>
        <a
          rel='noreferrer'
          title='Chat Facebook'
          target='_blank'
          className='fb-box d-flex m-auto ml-lg-1 mr-lg-1 align-items-center justify-content-center rounded-circle'
        >
          <img
            className='dd-lg-block lazy loaded'
            src='/images/messenger.png'
            alt='Mew Fashion'
          />
        </a>
      </Link>
      <Link href='https://zalo.me/+18001231234'>
        <a
          rel='noreferrer'
          title='Chat Zalo'
          target='_blank'
          className='zalo-box m-auto ml-lg-1 mr-lg-1 d-flex align-items-center justify-content-center'
        >
          <img
            className='d-lg-block lazy loaded'
            src='/images/zalo_des.png'
            alt='Mew Fashion'
          />
        </a>
      </Link>
    </div>
  );
}

export default FixedContact;
