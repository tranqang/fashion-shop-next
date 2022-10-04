import Link from 'next/link';
import React from 'react';

function MobileSubNavItem({ open, menu, index, setOpenIndex }) {
  return (
    <li
      onClick={() => setOpenIndex(index)}
      className={`level0 d-block w-100 position-static ${open ? 'open' : ''}`}
    >
      <Link href='#'>
        <a
          title='Áo thun'
          className='position-relative d-flex js-submenu-1 flex-column justify-content-center align-items-center text-center p-2'
        >
          <img
            className='lazy d-block pb-2 m-auto loaded'
            src={menu.icon}
            alt='Áo thun'
          />
          <span className='line_1 line_2'>{menu.name}</span>
        </a>
      </Link>
      <ul className='lv1 p-1 position-absolute h-100 m_chill  bg-white'>
        {menu.children.map(child => (
          <li key={child.id} className='level1 position-relative mb-1'>
            <Link href={child.url}>
              <a className='ratio4by3 position-relative has-edge aspect d-block modal-open'>
                <img
                  src={child.image}
                  className='d-block img position-absolute w-100 h-100 lazy loaded'
                  alt={child.name}
                />

                <span
                  className='pt-1 position-absolute text-uppercase mr-2 ml-2 align-items-center font-weight-bold '
                  title={child.name}
                >
                  {child.name}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default MobileSubNavItem;
