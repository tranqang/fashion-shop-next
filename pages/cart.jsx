import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from '../components/BreadCrumb';
import CartItem from '../components/CartItem';
import { productData } from '../data/data';
import convertPrice from '../helpers/convertPrice';
import DefaultLayout from '../layouts/DefaultLayout';

function Cart() {
  const cart = useSelector(state => state.cart);
  const totalPrice = cart
    .map(item => {
      const priceList = productData.find(
        product => product.id === item.productId
      ).price;
      const price = priceList.find(
        price => price.size === item.size && price.color === item.color
      ).unit_price;
      return price * item.quantity;
    })
    .reduce((prev, current) => prev + current, 0);

  return (
    <DefaultLayout>
      <div className='container'>
        <BreadCrumb from='Trang chủ' to='Giỏ hàng' />
        <div className='content_wrapper'>
          <div className='row js-cart'>
            <div className='basket cart__basket col-md-7 col-lg-8'>
              {cart.map(cartItem => (
                <CartItem key={cartItem.id} product={cartItem} />
              ))}
            </div>
            <div className='summary cart__summary col-md-5 col-lg-4'>
              <dl className='total mb-3 p-3 d-flex align-items-center clearfix flex-wrap justify-content-end rounded'>
                <dt className='text-uppercase font-weight-bold rounded'>
                  Tổng
                </dt>
                <dd className='cart__summary_total font-weight-bold ml-auto mb-0'>
                  {convertPrice(totalPrice)}
                </dd>
              </dl>
              <Link href='/checkout'>
                <a
                  className='btn btn-block btn-checkout rounded mb-3 text-uppercase font-weight-bold'
                  role='button'
                >
                  Thanh toán
                </a>
              </Link>
              <Link
                href='/collections/all'
                className='btn btn-block btn-contitnue rounded mb-3'
                role='button'
              >
                <a
                  className='btn btn-block btn-contitnue rounded mb-3'
                  role='button'
                >
                  Tiếp tục mua hàng
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Cart;
