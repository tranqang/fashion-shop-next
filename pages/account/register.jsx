import React from 'react';
import Link from 'next/link';
function Login() {
  return (
    <div className='account_style'>
      <section className='login-layout d-flex align-items-center justify-content-center'>
        <div className='box_log position-relative'>
          <div className='square border-mew position-absolute squa-mew' />
          <div className='square border-mew position-absolute squa-mew' />
          <div className='square border-mew position-absolute squa-mew' />
          <div className='square border-mew position-absolute squa-mew' />
          <div className='square border-mew position-absolute squa-mew' />
          <div className='b_big position-relative pl-xl-5 pr-xl-5 pt-xl-4 pb-xl-4 p-3 border-mew squa-mew'>
            <div className='registered-users'>
              <div className='content'>
                <form
                  acceptCharset='utf-8'
                  action='/account/login'
                  id='customer_login'
                  method='post'
                >
                  <input
                    name='FormType'
                    type='hidden'
                    defaultValue='customer_login'
                  />
                  <input name='utf8' type='hidden' defaultValue='true' />
                  <h3 className='font-weight-bold mb-3 whites text-center'>
                    Đăng nhập
                  </h3>
                  <div className='form-group'>
                    <label
                      htmlFor='customer_email'
                      className='col-form-label d-none'
                    >
                      Email<span className='text-danger'>*</span>
                    </label>
                    <input
                      type='email'
                      placeholder='Email'
                      className='border-mew mew-control'
                      pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                      name='email'
                      id='customer_email'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label
                      htmlFor='customer_password'
                      className='d-none col-form-label'
                    >
                      Mật khẩu<span className='text-danger'>*</span>
                    </label>
                    <input
                      type='password'
                      placeholder='Mật khẩu'
                      className='border-mew mew-control'
                      name='password'
                      id='customer_password'
                      required
                    />
                  </div>
                  <div className='form-group d-flex justify-content-between align-items-center'>
                    <button
                      type='submit'
                      className='btn border-mew mew-control lk font-weight-bold'
                    >
                      Đăng nhập
                    </button>
                    <Link href='/account/login#recover'>
                      <a
                        className='whites font-weight-bold'
                        id='RecoverPassword'
                      >
                        Quên mật khẩu?
                      </a>
                    </Link>
                  </div>
                  <div className='form-error text-left mb-4 text-danger'></div>
                </form>
                <form
                  acceptCharset='utf-8'
                  action='/account/recover'
                  id='recover_customer_password'
                  method='post'
                >
                  <input
                    name='FormType'
                    type='hidden'
                    defaultValue='recover_customer_password'
                  />
                  <input name='utf8' type='hidden' defaultValue='true' />
                  <div id='recover_password' className='d-none'>
                    <h3 className='font-weight-bold mb-3 whites text-center'>
                      Đặt lại mật khẩu
                    </h3>
                    <p className='line_cus whites text-center'>
                      Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt
                      lại mật khẩu.
                    </p>
                    <div className='form-error mb-4 text-danger'></div>
                    <div className='form-group'>
                      <label
                        htmlFor='customer_email1'
                        className='col-form-label d-none'
                      >
                        Email<span className='text-danger'>*</span>
                      </label>
                      <input
                        type='email'
                        className='border-mew mew-control'
                        placeholder='Email'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        name='email'
                        id='customer_email1'
                        required
                      />
                    </div>
                    <div className='form-group d-flex justify-content-between align-items-center'>
                      <button
                        type='submit'
                        className='btn btn-primary border-mew mew-control lk font-weight-bold'
                      >
                        Gửi
                      </button>
                      <Link href='/account/login#'>
                        <a className='whites font-weight-bold' title='Huỷ'>
                          Hủy
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>
                <div className='login_isocial'>
                  <div className='log_iso position-relative text-center'>
                    <span className='d-inline-block position-relative'>
                      Hoặc đăng nhập qua
                    </span>
                  </div>
                  <div className='d-flex align-items-center justify-content-center'>
                    <Link href='#'>
                      <a className='social-login--facebook'>
                        <img
                          width='129px'
                          height='37px'
                          alt='facebook-login-button'
                          src='/images/fb-btn.svg'
                        />
                      </a>
                    </Link>
                    <Link href='#'>
                      <a className='social-login--google'>
                        <img
                          width='129px'
                          height='37px'
                          alt='google-login-button'
                          src='/images/gp-btn.svg'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='new-users'>
              <h3 className='font-weight-bold mb-3 mt-4 whites text-center'>
                Đăng nhập
              </h3>
              <div className='content'>
                <p className='line_cus whites text-center'>
                  Tạo tài khoản để quản lý đơn hàng, và các thông tin thanh
                  toán, gửi hàng một cách đơn giản hơn.
                </p>
                <div className='buttons-set text-center'>
                  <button className='border-mew mew-control font-weight-bold mb-2'>
                    Tạo tài khoản
                  </button>
                  <button className='border-mew mew-control font-weight-bold'>
                    Quay về trang chủ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
