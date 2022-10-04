import Link from 'next/link';
import React from 'react';
import ChevronRightIcon from './icons/ChevronRightIcon';

function HeaderSubNav({ menu }) {
  return (
    <ul className='lv1 list-group p-0 list-unstyled'>
      {menu.map(menuItem => {
        const { id, name, url, children, image } = menuItem;
        return (
          <li
            key={id}
            className=' level1 pr-lg-3 pb-lg-3 pl-3 position-relative cls'
          >
            <Link href={url}>
              <a
                className='ratio4by3 position-relative has-edge aspect d-block modal-open'
                title={name}
              >
                <img
                  src={image}
                  className='img position-absolute d-lg-block fade-08 lazy loaded'
                  alt={name}
                />
              </a>
            </Link>

            <Link href={url}>
              <a
                className='pt-1 pb-1 pr-1 position-relative js-checkMenu text-uppercase'
                title={name}
              >
                {name}
              </a>
            </Link>
            {children && (
              <ul className='lv2 list-group p-0 list-unstyled'>
                {children.map(child => (
                  <li key={child.id} className='level2 pr-lg-2 '>
                    <Link href={child.url}>
                      <a
                        className='pl-3 pt-2 pb-2 position-relative d-flex'
                        title={child.name}
                      >
                        <ChevronRightIcon />
                        {child.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderSubNav;
