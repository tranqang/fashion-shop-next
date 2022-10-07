import React, { useState } from 'react';
import Link from 'next/link';
import { filterData } from '../data/data';
import FilterItem from '../components/FilterItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from '../redux/reducers/filterSlice';
function FilterList() {
  const [openFilter, setOpenFilter] = useState(false);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`sidebar sidebar_mobi m-0 pt-1 pb-1 pl-2 pr-2 p-lg-0 ${
          openFilter ? 'openf' : ''
        }`}
      >
        <div className='filter-container__selected-filter mb-3'>
          <div className='filter-container__selected-filter-header d-flex clearfix'>
            <span className='filter-container__selected-filter-header-title'>
              LỌC THEO:
            </span>
            <Link href={'#'}>
              <a
                onClick={() => dispatch(clearFilter())}
                className='filter-container__clear-all text-danger ml-auto'
              >
                Xóa tất cả
              </a>
            </Link>
          </div>
          <ul className='filter-container__selected-filter-list pl-0 pt-2 pb-2 m-0 mb-2 list-unstyled d-block w-100'>
            {filter.map(filter => (
              <li
                key={filter.id}
                className='filter-container__selected-filter-item pr-1 d-inline-flex align-items-center mr-1 mb-2'
              >
                <Link href={'#'}>
                  <a onClick={() => dispatch(removeFilter(filter))}>
                    <img src='/images/close.png' alt='' />
                    {filter.value}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='aside-filter'>
          <div className='filter-container'>
            {filterData.map((filterItem, index) => (
              <FilterItem
                key={index}
                id={filterItem.id}
                title={filterItem.title}
                items={filterItem.items}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        id='open-filters'
        className={`open-filters position-fixed d-lg-none ${
          openFilter ? 'openf' : ''
        }`}
      >
        <span className='fter d-flex align-items-center justify-content-center text-center position-relative'>
          <img
            onClick={() => setOpenFilter(true)}
            className='fil_o'
            src='/images/filter.png'
            alt='Mew Fashion'
          />
          <img
            onClick={() => setOpenFilter(false)}
            className='fil_x'
            src='/images/filter_close.png'
            alt='Mew Fashion'
          />
        </span>
      </div>
    </>
  );
}

export default FilterList;
