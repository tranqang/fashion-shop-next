import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Map from '../components/Map';
import { categoryData } from '../data/data';
import DefaultLayout from '../layouts/DefaultLayout';
function Contact() {
  const category = categoryData.find(category => category.type === 5);
  return (
    <DefaultLayout>
      <div className='container'>
        <BreadCrumb from='Trang chủ' to={category.name} />
        <div className='rte m-auto bg-white pt-3 pb-3'>
          <h1 className='font-weight-bold page_title'>{category.name}</h1>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <div className='content_ct text-justify mb-3'>
                {category.desc.map((descItem, index) => (
                  <p key={index}>{descItem}</p>
                ))}
              </div>
              {/* <p>
                Địa chỉ: Ladeco Building, 266 Doi Can Street, Ba Dinh District,
                Hanoi.
              </p>
              <p>
                Email:{' '}
                <a href='mailto:support@sapo.vn' title='support@sapo.vn'>
                  support@sapo.vn
                </a>
              </p>
              <p>
                Số điện thoại:{' '}
                <a href='tel:19006750' title='1900 6750'>
                  1900 6750
                </a>
              </p> */}
            </div>
            <div className='col-md-6 col-12'>
              <form
                acceptCharset='utf-8'
                action='/contact'
                id='contact'
                method='post'
              >
                <input name='FormType' type='hidden' defaultValue='contact' />
                <input name='utf8' type='hidden' defaultValue='true' />
                <input type='hidden' />
                <input name='form_type' type='hidden' defaultValue='contact' />
                <input name='utf8' type='hidden' defaultValue='?' />
                <div className='customer-name row'>
                  <div className='col-12 form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='contact[Name]'
                      placeholder='Họ tên *'
                      required
                    />
                  </div>
                  <div className='col-12 form-group'>
                    <input
                      type='email'
                      className='form-control'
                      name='contact[email]'
                      placeholder='Email *'
                      required
                    />
                  </div>
                  <label className='d-none'>
                    Nội dung <span className='required'>*</span>
                  </label>
                  <div className='col-12 form-group'>
                    <textarea
                      name='contact[Body]'
                      placeholder='Lời nhắn *'
                      className='form-control'
                      rows={3}
                      defaultValue={''}
                    />
                  </div>
                </div>
                <span className='require d-block mb-3'>
                  <em className='required'>* </em>Thông tin bắt buộc
                </span>
                <div className='buttons-set'>
                  <button
                    type='submit'
                    title='Submit'
                    className='book-submit btn btn-primary text-center d-flex align-items-center font-weight-bold subml'
                  >
                    <span> Gửi </span>{' '}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='google-map mt-4'>
            <Map width='100%' height={320} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Contact;
