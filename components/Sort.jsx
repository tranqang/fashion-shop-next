import React from 'react';

function Sort() {
  return (
    <div className='sortPagiBar pt-2 pb-2 border-bottom  '>
      <b style={{ verticalAlign: '1px' }}>Sắp xếp:</b>
      <div className='form-check-inline'>
        <label className='form-check-label d-inline-flex align-items-center d-inline-flex align-items-center'>
          <input
            type='radio'
            className='form-check-input sortby-alpha-asc'
            name='sortBy'
          />
          A → Z
        </label>
      </div>
      <div className='form-check-inline'>
        <label className='form-check-label d-inline-flex align-items-center'>
          <input
            type='radio'
            className='form-check-input sortby-alpha-desc'
            name='sortBy'
          />
          Z → A
        </label>
      </div>
      <div className='form-check-inline'>
        <label className='form-check-label d-inline-flex align-items-center'>
          <input
            type='radio'
            className='form-check-input sortby-price-asc'
            name='sortBy'
          />
          Giá tăng dần
        </label>
      </div>
      <div className='form-check-inline'>
        <label className='form-check-label d-inline-flex align-items-center'>
          <input
            type='radio'
            className='form-check-input sortby-price-desc'
            name='sortBy'
          />
          Giá giảm dần
        </label>
      </div>
      <div className='form-check-inline'>
        <label className='form-check-label d-inline-flex align-items-center'>
          <input
            type='radio'
            className='form-check-input sortby-created-desc'
            name='sortBy'
          />
          Hàng mới nhất
        </label>
      </div>
      <div className='form-check-inline'>
        <label className='form-check-label d-inline-flex align-items-center'>
          <input
            type='radio'
            className='form-check-input sortby-created-asc'
            name='sortBy'
          />
          Hàng cũ nhất
        </label>
      </div>
    </div>
  );
}

export default Sort;
