import Link from 'next/link';
import React, { useState } from 'react';

function InfoCard({ details }) {
  const [show, setShow] = useState(false);
  return (
    <div className='card mb-2'>
      <div className='card-header'>
        <Link href='#'>
          <a
            onClick={() => setShow(!show)}
            className={show ? '' : 'collapsed'}
            data-toggle='collapse'
            data-parent='#accordion'
            title='Thông tin chi tiết '
            aria-expanded='true'
          >
            <h3 className='panel-title'>Thông tin chi tiết </h3>
          </a>
        </Link>
      </div>
      <div
        id='collapse0'
        className={`panel-collapse collapse ${show ? 'show' : ''}`}
      >
        <div className='card-body'>
          {details ? (
            <>
              <p>
                <strong>Chất liệu:&nbsp;</strong>92% TC, 8% Spandex
              </p>
              <p>
                <strong>Kiểu dáng:</strong>&nbsp;Form slimfit ôm vừa người, tôn
                dáng&nbsp;
              </p>
              <p>
                <strong>Thiết kế:</strong>&nbsp;Cổ tròn basic dễ phối đồ
              </p>
              <p>
                <strong>Ưu điểm:&nbsp;</strong>Thấm hút mồ hôi tốt,&nbsp;bề mặt
                mịn, thân thiện với da
              </p>
            </>
          ) : (
            <>
              <p>
                Thành phần TC là sự kết hợp của 2 chất liệu Cotton và Polyester
                mang đến cảm giác mềm mại ngay lần đầu chạm, cho bạn cảm giác
                thoải mái và dịu êm trên làn da khi mặc. Thấm hút mồ hôi tốt và
                làm mát cơ thể.&nbsp;Giữ cho sản phẩm không bị phai màu theo
                thời gian. Hạn chế hấp thụ chất bẩn và dễ làm sạch sản
                phẩm&nbsp;
              </p>
              <p>
                Chống nhăn nhàu,&nbsp;tiết kiệm thời gian là ủi mỗi khi sử
                dụng&nbsp;
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
