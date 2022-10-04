import React from 'react';
import { useState } from 'react';

function FilterItem({ id, title, items, allFilter, setAllFilter }) {
  const handleChecked = item => {
    return allFilter.some(filter => filter.id === item.id);
  };
  const handleChangeSelect = item => {
    if (handleChecked(item)) {
      setAllFilter(allFilter.filter(filter => filter.id !== item.id));
    } else {
      const removedFilter = allFilter.filter(
        filter => filter.parentId !== item.parentId
      );
      setAllFilter([...removedFilter, item]);
    }
  };

  return (
    <aside className='aside-item filter-price mb-3 bg-white'>
      <div className='h2 title-head m-0 pt-2 pb-2 font-weight-bold'>
        {title}
      </div>
      <div className='aside-content filter-group'>
        <ul className='list-unstyled m-0'>
          {items.map(item => {
            return (
              <li
                key={item.key}
                className='filter-item filter-item--check-box '
              >
                <label
                  className='d-flex align-items-baseline pt-1 pb-1 m-0'
                  htmlFor={item.key}
                >
                  <input
                    // onChange={() => handleChangeSelect(item)}
                    // checked={handleChecked(item)}
                    type='checkbox'
                    id={item.key}
                    name={id}
                    className='d-none'
                  />
                  <i className='fa position-relative mr-2' /> {item.value}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default FilterItem;
