import React from 'react';

function GiftCard() {
  return (
    <div className='gift_cnt position-relative p-3 rounded mb-3'>
      <div className='product-promotions-list-title pb-1 mb-2 font-weight-bold'>
        <span>KHUYẾN MÃI</span>
      </div>
      <div className='product-promotions-list-content'>
        <div className='promo-detail'>
          <ul>
            <li>Phiếu tích điểm cho các lần mua tiếp theo.</li>
            <li>Mua 3 sản phẩm giảm 5%.</li>
            <li>Mua 5 sản phẩm giảm 6%.</li>
            <li>Ưu đãi khách hàng Vip.</li>
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
