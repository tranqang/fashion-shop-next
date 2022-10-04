import Link from 'next/link';
import React from 'react';

function BrandCard({ brand }) {
  return (
    <Link href='#'>
      <a title={brand.name}>
        <img className='lazy loaded' src={brand.logo} alt={brand.name} />
      </a>
    </Link>
  );
}

export default BrandCard;
