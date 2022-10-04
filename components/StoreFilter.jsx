import React from 'react';

function StoreFilter() {
  return (
    <div className='leftCollumStore'>
      <div className='form-group m-0'>
        <label className='select-city-label font-weight-bold text-uppercase position-relative mb-2'>
          Chọn tỉnh thành phố
        </label>
        <label className='select-city-wrapper pl-1 pr-1 mb-1'>
          <select name='select-city' className='select-city custom-select'>
            <option value disabled>
              Chọn Tỉnh/ Thành Phố
            </option>
            <option value='Hà Nội'>Hà Nội</option>
            <option value='Hải Phòng'>Hải Phòng</option>
          </select>
        </label>
      </div>
      <div className='resultStore'>
        <div id='list-store'>
          <div
            className='item position-relative p-1 mb-1 rounded checked'
            data-lat='21.0455954'
            data-lng='105.8616576'
            data-address='Số 34 Ngõ 2 Ngọc Thụy, Ngọc Thụy'
          >
            <div className='district font-weight-bold'>
              Mew ShowRoom Long Biên
            </div>
            <div>Mail: mew_longbien@mew.vn</div>
            <div>Hotline: 937 079 668</div>
            <div>Số 34 Ngõ 2 Ngọc Thụy, Ngọc Thụy - Long Biên</div>
          </div>
          <div
            className='item position-relative p-1 mb-1 rounded'
            data-lat='21.0365209'
            data-lng='105.813689'
            data-address='266 Đội Cấn'
          >
            <div className='district font-weight-bold'>
              Mew ShowRoom Ba Đình
            </div>
            <div>Mail: mew_badinh@mew.vn</div>
            <div>Hotline: 0936 079 888</div>
            <div>266 Đội Cấn - Ba Đình</div>
          </div>
          <div
            className='item position-relative p-1 mb-1 rounded'
            data-lat='21.0133828'
            data-lng='105.8011078'
            data-address='Ngõ 110 Trần Duy Hưng, Trung Hoà'
          >
            <div className='district font-weight-bold'>
              Mew ShowRoom Cầu Giấy
            </div>
            <div>Mail: mew_caugiay@mew.vn</div>
            <div>Hotline: 0975 99 77 36</div>
            <div>Ngõ 110 Trần Duy Hưng, Trung Hoà - Cầu Giấy</div>
          </div>
          <div
            className='item position-relative p-1 mb-1 rounded'
            data-lat='21.0273968'
            data-lng='105.8509175'
            data-address='2 Tràng Thi, Hàng Trống'
          >
            <div className='district font-weight-bold'>
              Mew ShowRoom Hoàn Kiếm
            </div>
            <div>Mail: mew_hoankiem@mew.vn</div>
            <div>Hotline: 0936 079 868</div>
            <div>2 Tràng Thi, Hàng Trống - Hoàn Kiếm</div>
          </div>
          <div
            className='item position-relative p-1 mb-1 rounded'
            data-lat='21.0275692'
            data-lng='105.8353494'
            data-address='43 Ngõ 38 Ngô Sỹ Liên'
          >
            <div className='district font-weight-bold'>
              Mew ShowRoom Đống Đa
            </div>
            <div>Mail: mew_dongda@mew.vn</div>
            <div>Hotline: 0936 079 887</div>
            <div>43 Ngõ 38 Ngô Sỹ Liên - Đống Đa</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreFilter;
