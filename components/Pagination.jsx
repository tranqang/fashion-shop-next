import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
function Pagination({ currentPage, totalPage }) {
  const router = useRouter();
  return (
    <ul className='pagination d-flex justify-content-center clearfix mt-4 mb-5'>
      <li className='page-item'>
        <Link
          href={{
            pathname: router.pathname,
            query: {
              ...router.query,
              page: currentPage > 1 ? currentPage - 1 : 1,
            },
          }}
        >
          <a className='page-link rounded-0 text-center' title='Trang trước'>
            «
          </a>
        </Link>
      </li>
      <li className='active page-item disabled'>
        <Link href='/#'>
          <a
            className='page-link rounded-0 text-center'
            title={`Trang ${currentPage}`}
          >
            {currentPage}
          </a>
        </Link>
      </li>
      {currentPage < totalPage && (
        <>
          <li className='page-item'>
            <Link href={`?page=${currentPage + 1}`}>
              <a className='page-link rounded-0 text-center' title='Trang 2'>
                {currentPage + 1}
              </a>
            </Link>
          </li>
          <li className='page-item'>
            <Link href={`?page=${currentPage + 1}`}>
              <a className='page-link rounded-0 text-center' title='Trang kế'>
                »
              </a>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Pagination;
