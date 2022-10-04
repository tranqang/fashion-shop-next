import Link from 'next/link';
import React from 'react';
// import HeaderSubNav from './HeaderSubNav';
import { menuData } from '../data/data';
import HeaderSubNav from './HeaderSubNav';
function HeaderNav() {
  return (
    <div className='navigation-block mr-lg-auto'>
      <ul
        id='menu_pc'
        className='p-0 m-0 menu_pc list-unstyled position-static d-lg-flex justify-content-lg-end'
      >
        {menuData
          .filter(menu => menu.type === 1)
          .map(menuItem => {
            const { id, name, url, children } = menuItem;
            return (
              <li
                key={id}
                className={`level0 position-relative cls ${
                  id === 3 ? 'mega' : ''
                }`}
              >
                <Link href={url}>
                  <a
                    title={name}
                    className={`font-weight-bold d-block pt-2 pb-2 ${
                      children ? 'pr-4' : 'pr-lg-3 pr-2'
                    } position-relative`}
                  >
                    {name}
                    {children && (
                      <i className='down_icon align-items-center justify-content-center position-absolute d-none d-lg-block mg'></i>
                    )}
                  </a>
                </Link>
                {id === 3 && <HeaderSubNav menu={children} />}
                {id === 6 && (
                  <ul className='lv1 list-group p-0 list-unstyled'>
                    {children.map(child => (
                      <li
                        key={child.id}
                        className='no level1 pr-lg-3  pl-3 position-relative cls'
                      >
                        <Link
                          href={child.url}
                          className='pt-1 pb-1 pr-1 position-relative js-checkMenu '
                          title={child.name}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default HeaderNav;
