import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import DefaultLayout from '../layouts/DefaultLayout';

function Introduce() {
  return (
    <DefaultLayout>
      <div className='container'>
        <BreadCrumb from='Trang chủ' to='Giới Thiệu' />
        <h1 className='font-weight-bold text-center mt-3'>Giới Thiệu</h1>
        <div className='rte m-auto bg-white p-4 d-block'>
          <p>
            Cửa hàng MEWFASHION đặt tại 266 Đội Cấn&nbsp;là cửa hàng cung cấp
            giày , dép , phụ kiện thể thao chính hãng với hơn 2 năm kinh nghiệm
            trong lĩnh vực bán buôn , phân phối và bán lẻ hàng hóa trong lĩnh
            vực giày, dẹp và các sản phẩm phụ kiện thời trang.
          </p>
          <p>
            Giầy dép là một trong những phụ kiện không thể thiếu góp phần tạo
            nên phong cách thời trang của mỗi người. Chính vì điều đó MEWFASHION
            mong muốn đem đến những mẫu giầy mới nhất được cập nhật thường xuyên
            giúp các bạn&nbsp;dễ dàng hơn trong việc lựa chọn và cập nhật những
            style thịnh hành của thời trang giầy dép trong nước và thế giới.
          </p>
          <p>
            Trong hơn 2 năm 2019-2021 chúng tôi hãnh diện là nhà phân phối , bán
            lẻ hàng chính hãng có tiếng ở VN , đã cung cấp rất nhiều sản phẩm
            cho người nổi tiếng , các cửa hàng có tiếng và mang đến quý khách
            hàng sản phẩm chính hãng , hơn thế nữa cung cấp chế độ đổi theo giúp
            cho quý khách yên tâm sử dụng sản phẩm.
          </p>
          <p>
            Chúng tôi hân hạnh là một trong những
            <strong>&nbsp;FASHION SHOP</strong>&nbsp;đầu tiên ở Hà Nội nói riêng
            và Việt Nam nói chung (thành lập MEWFASHION vào 9 năm 2019.) có hàng
            hóa đa dạng với giày , dép , túi ... sẵn sàng phục vụ quý khách
            nhanh chóng thông qua việc bán tại cửa hàng tại 266 Đội Cấn, Ba
            Đình, Hà Nội và đặt hàng online trên website.
          </p>
          <p>
            Cuối cùng cửa hàng MEWFASHION rất cảm ơn sự ủng hộ của quý khách đối
            với cửa hàng chúng tôi trong thời gian qua. Cửa hàng MEWFASHION
            chúng tôi cam kết sẽ luôn cố gắng hết sức mình để cung cấp cho quý
            khách hàng dịch vụ và sản phẩm tốt nhất.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Introduce;
