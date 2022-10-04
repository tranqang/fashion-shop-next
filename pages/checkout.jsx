import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import CheckoutItem from '../components/CheckoutItem';
import { productData } from '../data/data';
import convertPrice from '../helpers/convertPrice';

function Checkout() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const totalPrice = cart
    .map(item => {
      const priceList = productData.find(
        product => product.id === item.productId
      ).price;
      const price = priceList.find(
        price => price.size === item.size && price.color === item.color
      ).unit_price;
      console.log(price);
      return price * item.quantity;
    })
    .reduce((prev, current) => prev + current, 0);

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          integrity='sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <div className='checkout_style'>
        <div className='multistep'>
          <button
            className='order-summary-toggle toggled'
            data-toggle='#order-summary'
            data-toggle-class='order-summary--is-collapsed'
          >
            <span className='wrap'>
              <span className='order-summary-toggle__inner'>
                <span className='order-summary-toggle__text expandable'>
                  Đơn hàng ({cart.length} sản phẩm)
                </span>
                <span
                  className='order-summary-toggle__total-recap'
                  data-tg-refresh='refreshDiscount'
                  id='order-summary-total-recap'
                >
                  {/* {convertPrice(totalPrice)} */}
                </span>
              </span>
            </span>
          </button>

          <div className='content'>
            <div className='wrap'>
              <main className='main'>
                <header className='main__header'>
                  <div className='logo logo--left '>
                    <Link href='/'>
                      <img
                        className='logo__image  logo__image--small'
                        alt='Mew Fashion'
                        src='/images/logo.png'
                      />
                    </Link>
                  </div>
                  <nav>
                    <ul className='progress-bar bg-white d-flex flex-row'>
                      <li className='progress-bar__item'>
                        <Link href='/cart'>
                          <a className='progress-bar__link'>Giỏ hàng</a>
                        </Link>
                        <span className='progress-bar__pipe' />
                      </li>
                      <li className='progress-bar__item progress-bar__item--current'>
                        <span>Thông tin</span>
                        <span className='progress-bar__pipe' />
                      </li>
                      <li className='progress-bar__item progress-bar__item--muted'>
                        <span>Vận chuyển</span>
                        <span className='progress-bar__pipe' />
                      </li>
                      <li className='progress-bar__item progress-bar__item--muted'>
                        <span>Thanh toán</span>
                      </li>
                    </ul>
                  </nav>
                </header>
                <div className='main__content'>
                  <form action='#' method='post'>
                    <input
                      type='hidden'
                      name='step'
                      defaultValue='contact_information'
                    />
                    <article className='step animate-floating-labels'>
                      <div className='step__sections'>
                        <section className='section'>
                          <div className='section__header'>
                            <div className='layout-flex'>
                              <h2 className='section__title layout-flex__item layout-flex__item--stretch'>
                                <i className='fa fa-id-card-o fa-lg section__title--icon hide-on-desktop' />
                                Thông tin nhận hàng
                              </h2>
                              <Link href='/account/login'>
                                <a>
                                  <i className='fa fa-user-circle-o fa-lg' />
                                  <span>Đăng nhập </span>
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className='section__content'>
                            <div className='fieldset'>
                              <div className='field'>
                                <div className='field__input-wrapper'>
                                  <label
                                    htmlFor='email'
                                    className='field__label'
                                  >
                                    Email
                                  </label>
                                  <input
                                    name='email'
                                    id='email'
                                    type='email'
                                    className='field__input'
                                  />
                                </div>
                              </div>
                              <div className='field '>
                                <div className='field__input-wrapper'>
                                  <label
                                    htmlFor='billingName'
                                    className='field__label'
                                  >
                                    Họ và tên
                                  </label>
                                  <input
                                    name='billingName'
                                    id='billingName'
                                    type='text'
                                    className='field__input'
                                  />
                                </div>
                              </div>
                              <div className='field '>
                                <div className='field__input-wrapper'>
                                  <label
                                    htmlFor='billingPhone'
                                    className='field__label'
                                  >
                                    Số điện thoại (tùy chọn)
                                  </label>
                                  <input
                                    name='billingPhone'
                                    id='billingPhone'
                                    type='tel'
                                    className='field__input'
                                  />
                                </div>
                              </div>
                              <div className='field '>
                                <div className='field__input-wrapper'>
                                  <label
                                    htmlFor='billingAddress'
                                    className='field__label'
                                  >
                                    Địa chỉ (tùy chọn)
                                  </label>
                                  <input
                                    name='billingAddress'
                                    id='billingAddress'
                                    type='text'
                                    className='field__input'
                                  />
                                </div>
                              </div>

                              <div className='field-group'>
                                <div className='field field--show-floating-label '>
                                  <div className='field__input-wrapper field__input-wrapper--select2'>
                                    <label
                                      htmlFor='billingProvince'
                                      className='field__label'
                                    >
                                      Tỉnh thành
                                    </label>
                                    <select
                                      name='billingProvince'
                                      id='billingProvince'
                                      size={1}
                                      type='text'
                                      className='field__input field__input--select'
                                    >
                                      <option value hidden>
                                        ---
                                      </option>
                                      <option value={1}>Hà Nội</option>
                                      <option value={2}>TP Hồ Chí Minh</option>
                                      <option value={3}>An Giang</option>
                                      <option value={4}>Bà Rịa-Vũng Tàu</option>
                                      <option value={5}>Bắc Giang</option>
                                      <option value={6}>Bắc Kạn</option>
                                      <option value={7}>Bạc Liêu</option>
                                      <option value={8}>Bắc Ninh</option>
                                      <option value={9}>Bến Tre</option>
                                      <option value={10}>Bình Dương</option>
                                      <option value={11}>Bình Định</option>
                                      <option value={12}>Bình Phước</option>
                                      <option value={13}>Bình Thuận</option>
                                      <option value={14}>Cà Mau</option>
                                      <option value={15}>Cao Bằng</option>
                                      <option value={16}>Cần Thơ</option>
                                      <option value={17}>Đà Nẵng</option>
                                      <option value={18}>Đắk Lắk</option>
                                      <option value={19}>Đắk Nông</option>
                                      <option value={20}>Điện Biên</option>
                                      <option value={21}>Đồng Nai</option>
                                      <option value={22}>Đồng Tháp</option>
                                      <option value={23}>Gia Lai</option>
                                      <option value={24}>Hà Giang</option>
                                      <option value={25}>Hà Nam</option>
                                      <option value={26}>Hà Tĩnh</option>
                                      <option value={27}>Hải Dương</option>
                                      <option value={28}>Hải Phòng</option>
                                      <option value={29}>Hậu Giang</option>
                                      <option value={30}>Hòa Bình</option>
                                      <option value={31}>Hưng Yên</option>
                                      <option value={32}>Khánh Hòa</option>
                                      <option value={33}>Kiên Giang</option>
                                      <option value={34}>Kon Tum</option>
                                      <option value={35}>Lai Châu</option>
                                      <option value={36}>Lâm Đồng</option>
                                      <option value={37}>Lạng Sơn</option>
                                      <option value={38}>Lào Cai</option>
                                      <option value={39}>Long An</option>
                                      <option value={40}>Nam Định</option>
                                      <option value={41}>Nghệ An</option>
                                      <option value={42}>Ninh Bình</option>
                                      <option value={43}>Ninh Thuận</option>
                                      <option value={44}>Phú Thọ</option>
                                      <option value={45}>Phú Yên</option>
                                      <option value={46}>Quảng Bình</option>
                                      <option value={47}>Quảng Nam</option>
                                      <option value={48}>Quảng Ngãi</option>
                                      <option value={49}>Quảng Ninh</option>
                                      <option value={50}>Quảng Trị</option>
                                      <option value={51}>Sóc Trăng</option>
                                      <option value={52}>Sơn La</option>
                                      <option value={53}>Tây Ninh</option>
                                      <option value={54}>Thái Bình</option>
                                      <option value={55}>Thái Nguyên</option>
                                      <option value={56}>Thanh Hóa</option>
                                      <option value={57}>Thừa Thiên Huế</option>
                                      <option value={58}>Tiền Giang</option>
                                      <option value={59}>Trà Vinh</option>
                                      <option value={60}>Tuyên Quang</option>
                                      <option value={61}>Vĩnh Long</option>
                                      <option value={62}>Vĩnh Phúc</option>
                                      <option value={63}>Yên Bái</option>
                                    </select>
                                    <span
                                      className='select2 select2-container select2-container--default'
                                      dir='ltr'
                                      data-select2-id='select2-data-1-fkkv'
                                      style={{ width: '100%' }}
                                    >
                                      {/* <span className='selection'>
                                      <span
                                        className='select2-selection select2-selection--single'
                                        role='combobox'
                                        tabIndex={0}
                                      >
                                        <span
                                          className='select2-selection__rendered'
                                          id='select2-billingProvince-container'
                                          role='textbox'
                                          title='---'
                                        >
                                          ---
                                        </span>
                                        <span
                                          className='select2-selection__arrow'
                                          role='presentation'
                                        >
                                          <b role='presentation' />
                                        </span>
                                      </span>
                                    </span> */}
                                      <span
                                        className='dropdown-wrapper'
                                        aria-hidden='true'
                                      />
                                    </span>
                                  </div>
                                </div>
                                <div className='field field--show-floating-label '>
                                  <div className='field__input-wrapper field__input-wrapper--select2'>
                                    <label
                                      htmlFor='billingDistrict'
                                      className='field__label'
                                    >
                                      Quận huyện (tùy chọn)
                                    </label>
                                    <select
                                      name='billingDistrict'
                                      id='billingDistrict'
                                      size={1}
                                      type='text'
                                      className='field__input field__input--select select2-hidden-accessible'
                                      data-address-type='district'
                                      data-address-zone='billing'
                                      data-select2-id='select2-data-billingDistrict'
                                      tabIndex={-1}
                                      aria-hidden='true'
                                      disabled='disabled'
                                    />
                                    <span
                                      className='select2 select2-container select2-container--default select2-container--disabled'
                                      dir='ltr'
                                      data-select2-id='select2-data-2-6jfz'
                                      style={{ width: '100%' }}
                                    >
                                      <span className='selection'>
                                        <span
                                          className='select2-selection select2-selection--single'
                                          role='combobox'
                                          aria-haspopup='true'
                                          aria-expanded='false'
                                          tabIndex={-1}
                                          aria-disabled='true'
                                          aria-labelledby='select2-billingDistrict-container'
                                        >
                                          <span
                                            className='select2-selection__rendered'
                                            id='select2-billingDistrict-container'
                                            role='textbox'
                                            aria-readonly='true'
                                          />
                                          <span
                                            className='select2-selection__arrow'
                                            role='presentation'
                                          >
                                            <b role='presentation' />
                                          </span>
                                        </span>
                                      </span>
                                      <span
                                        className='dropdown-wrapper'
                                        aria-hidden='true'
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <div className='fieldset section section--no-title'>
                          <h3 className='visually-hidden'>Ghi chú</h3>
                          <div className='field '>
                            <div className='field__input-wrapper'>
                              <label htmlFor='note' className='field__label'>
                                Ghi chú (tùy chọn)
                              </label>
                              <textarea
                                name='note'
                                id='note'
                                type='text'
                                className='field__input'
                              />
                            </div>
                          </div>
                        </div>
                        {/* end main step block */}
                      </div>
                      <div className='step__footer'>
                        <div
                          id='common-alert'
                          data-tg-refresh='refreshError'
                        ></div>
                        <div className='step__btn-group'>
                          <button className='btn spinner' type='submit'>
                            <span className='spinner-label'>
                              Tiếp tục chọn phương thức vận chuyển
                            </span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='spinner-loader'
                            >
                              <use href='#spinner' />
                            </svg>
                          </button>
                          <Link href='/cart'>
                            <a className='previous-link'>
                              <i className='previous-link__arrow'>❮</i>
                              <span className='previous-link__content'>
                                Giỏ hàng
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </form>
                </div>
                <div className='main__footer unprintable'>
                  <ul className='main__policy'>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p>
                    Quý khách vui lòng kiểm tra hàng trước khi thanh toán, nếu
                    có vấn đề từ sản phẩm quý khách có thể hoàn hàng trong 7
                    ngày.
                  </p>
                  <div className='modal-wrapper hide' id='refund_term'>
                    <div className='modal' style={{ display: 'inline-block' }}>
                      <div className='modal-header'>
                        <h2 className='modal-title'>Chính sách hoàn trả</h2>
                        <span
                          className='close'
                          data-toggle='#refund_term'
                          data-toggle-class='hide'
                        >
                          ×
                        </span>
                      </div>
                      <div className='modal-body'>
                        <pre className='term-preview' />
                      </div>
                    </div>
                  </div>
                  <div className='modal-wrapper hide' id='privacy_term'>
                    <div className='modal' style={{ display: 'inline-block' }}>
                      <div className='modal-header'>
                        <h2 className='modal-title'>Chính sách bảo mật</h2>
                        <span
                          className='close'
                          data-toggle='#privacy_term'
                          data-toggle-class='hide'
                        >
                          ×
                        </span>
                      </div>
                      <div className='modal-body'>
                        <pre className='term-preview' />
                      </div>
                    </div>
                  </div>
                  <div className='modal-wrapper hide' id='service_term'>
                    <div className='modal' style={{ display: 'inline-block' }}>
                      <div className='modal-header'>
                        <h2 className='modal-title'>Điều khoản sử dụng</h2>
                        <span
                          className='close'
                          data-toggle='#service_term'
                          data-toggle-class='hide'
                        >
                          ×
                        </span>
                      </div>
                      <div className='modal-body'>
                        <pre className='term-preview' />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <aside className='sidebar'>
                <div className='sidebar__header'>
                  <h2 className='sidebar__title'>
                    Đơn hàng ({cart.length} sản phẩm)
                  </h2>
                </div>
                <div className='sidebar__content'>
                  <div
                    id='order-summary'
                    //   className='order-summary order-summary--is-collapsed'
                    className='order-summary'
                  >
                    <div className='order-summary__sections'>
                      <div className='order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element'>
                        <table className='product-table'>
                          <caption className='visually-hidden'>
                            Chi tiết đơn hàng
                          </caption>
                          <thead className='product-table__header'>
                            <tr>
                              <th>
                                <span className='visually-hidden'>
                                  Ảnh sản phẩm
                                </span>
                              </th>
                              <th>
                                <span className='visually-hidden'>Mô tả</span>
                              </th>
                              <th>
                                <span className='visually-hidden'>
                                  Sổ lượng
                                </span>
                              </th>
                              <th>
                                <span className='visually-hidden'>Đơn giá</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map(cartItem => (
                              <CheckoutItem key={cartItem.id} item={cartItem} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className='order-summary__section order-summary__section--discount-code'>
                        <h3 className='visually-hidden'>Mã khuyến mại</h3>
                        <div className='edit_checkout animate-floating-labels'>
                          <form
                            method='post'
                            id='reductionCodeForm'
                            action='/checkout/663aebc1d5a74a2c8b26bb477d15f573'
                            data-tg-refresh='refreshDiscount'
                          >
                            <input type='hidden' name='_method' />
                            <input type='hidden' name='step' />
                            <div className='fieldset'>
                              <div className='field'>
                                <div className='field__input-btn-wrapper'>
                                  <div className='field__input-wrapper'>
                                    <label
                                      htmlFor='reductionCode'
                                      className='field__label'
                                    >
                                      Nhập mã giảm giá
                                    </label>
                                    <input
                                      name='reductionCode'
                                      id='reductionCode'
                                      type='text'
                                      className='field__input'
                                      autoComplete='off'
                                      data-define='{reductionCode: null}'
                                      data-bind-event-keypress='handleReductionCodeKeyPress(event)'
                                    />
                                  </div>
                                  <button
                                    className='field__input-btn btn spinner btn--disabled'
                                    type='button'
                                    data-bind-disabled='isLoadingReductionCode || !reductionCode'
                                    data-bind-event-click='applyReductionCode()'
                                    disabled
                                  >
                                    <span className='spinner-label'>
                                      Áp dụng
                                    </span>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='spinner-loader'
                                    >
                                      <use href='#spinner' />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div
                        className='order-summary__section order-summary__section--total-lines order-summary--collapse-element'
                        data-define="{subTotalPriceText: '498.000₫'}"
                        data-tg-refresh='refreshOrderTotalPrice'
                        id='orderSummary'
                      >
                        <table className='total-line-table'>
                          <caption className='visually-hidden'>
                            Tổng giá trị
                          </caption>
                          <thead>
                            <tr>
                              <td>
                                <span className='visually-hidden'>Mô tả</span>
                              </td>
                              <td>
                                <span className='visually-hidden'>
                                  Giá tiền
                                </span>
                              </td>
                            </tr>
                          </thead>
                          <tbody className='total-line-table__tbody'>
                            <tr className='total-line total-line--subtotal'>
                              <th className='total-line__name'>Tạm tính</th>
                              <td className='total-line__price'>
                                {convertPrice(totalPrice)}
                              </td>
                            </tr>
                            <tr className='total-line total-line--shipping-fee'>
                              <th className='total-line__name'>
                                Phí vận chuyển
                              </th>
                              <td className='total-line__price'>-</td>
                            </tr>
                          </tbody>
                          <tfoot className='total-line-table__footer'>
                            <tr className='total-line payment-due'>
                              <th className='total-line__name'>
                                <span className='payment-due__label-total'>
                                  Tổng cộng
                                </span>
                              </th>
                              <td className='total-line__price'>
                                <span className='payment-due__price'>
                                  {convertPrice(totalPrice)}
                                </span>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
