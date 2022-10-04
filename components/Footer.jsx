import Link from 'next/link';
import React from 'react';
import { menuData } from '../data/data';

function Footer() {
  return (
    <footer className='pt-5'>
      <div className='container pb-4'>
        <div className='row align-items-stretch'>
          <div className='col-xl-3 col-lg-3 col-md-8 col-sm-12 col-12 footer-left '>
            <Link href='/'>
              <a title='Mew Fashion' className='logo'>
                <img
                  src='/images/logo.png'
                  alt='Mew Fashion'
                  className=' lazy img-fluid'
                />
              </a>
            </Link>
            <div className='mt-1 mb-3'>
              Chúng tôi được thành lập từ tháng 4 năm 2020, với sứ mệnh đem lại
              những cảm giác hoàn toàn dị biệt khi lạc trong một vũ trụ cực kì
              dark với tông màu chủ đạo cyberpunk là signature.
            </div>
          </div>
          {menuData
            .filter(menu => menu.type === 2)
            .map(item => (
              <div
                key={item.id}
                className={
                  item.id !== 37
                    ? 'col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-left  pl-xl-5'
                    : 'col-lg-3 col-12 col-md-4 col-sm-6 footer-left'
                }
              >
                <h3
                  key={item.id}
                  className='footer-title mb-3 position-relative font-weight-bold mt-1'
                >
                  {item.name}
                </h3>
                <ul className='links'>
                  {item.children &&
                    item.children.map(child => (
                      <li key={child.id}>
                        <Link href={child.url}>
                          <a title={child.name}>{child.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className='foo_bot pt-2 pb-2'>
        <div className='container'>
          <div className='row bgk align-items-center'>
            <div className='col-lg-6 col-md-8 col-sm-12 col-xs-12'>
              <div className='coppyright'>
                Bản quyền thuộc về{' '}
                <Link href='https://www.facebook.com/mewtheme/'>
                  <a rel='nofollow noopener' title='MewTheme' target='_blank'>
                    MewTheme
                  </a>
                </Link>
                .{' '}
                <span className='d-block d-sm-inline'>
                  Cung cấp bởi{' '}
                  <Link href='/'>
                    <a title='Sapo' target='_blank' rel='nofollow noopener'>
                      Sapo
                    </a>
                  </Link>
                  .
                </span>
              </div>
            </div>
            <div className='col-lg-6 col-md-4 col-sm-12 col-xs-12'>
              <div className='footer-column-1 text-center'>
                <div className='payment-accept'>
                  <div>
                    <Link href='/#'>
                      <a className='position-relative iso sitdown modal-open d-inline-block mr-2'>
                        <img
                          className='first lazy'
                          src='/images/shopee.png'
                          alt='shopee'
                        />
                      </a>
                    </Link>

                    <Link href='/#'>
                      <a className='position-relative iso sitdown modal-open d-inline-block mr-2'>
                        <img
                          className=' lazy'
                          src='/images/tiki.png'
                          alt='tiki'
                        />
                      </a>
                    </Link>

                    <Link href='/#'>
                      <a className='position-relative iso sitdown modal-open d-inline-block mr-2'>
                        <img
                          className=' lazy'
                          src='/images/lazada.png'
                          alt='lazada'
                        />
                      </a>
                    </Link>

                    <Link href='/#'>
                      <a className='position-relative iso sitdown modal-open d-inline-block'>
                        <img
                          className=' lazy'
                          src='/images/sendo.png'
                          alt='sendo'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
