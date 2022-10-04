import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productData, sizeData } from '../data/data';
import convertPrice from '../helpers/convertPrice';
import { deleteFromCart, updateCart } from '../redux/reducers/cartSlice';

function CartItem({ product }) {
  const productCart = productData.find(item => item.id === product.productId);
  const unitPrice = productCart.price.find(
    item => item.color === product.color && item.size === product.size
  ).unit_price;
  const [quantity, setQuantity] = useState(product.quantity);
  const totalPrice = unitPrice * quantity;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCart({ id: product.id, quantity: quantity }));
  }, [quantity]);

  return (
    <div className='d-flex cart__basket__item product mb-4 rounded ux-card position-relative clearfix variantId-45187779'>
      <img
        src={
          productCart.color_image.find(item => item.color === product.color)
            .images[0]
        }
        className='position-absolute'
        alt='product'
      />
      <div className='col-12 d-flex p-0'>
        <p className='item-title clearfix mb-2'>
          <Link href={`/product/${productCart.id}`}>
            <a title='Áo thun T-shirt M-F 07' className='font-weight-bold'>
              {productCart.name}
            </a>
          </Link>

          <span className='d-block small font-weight-bold'>
            Size: {sizeData.find(size => size.id === product.size).name}
          </span>

          <span
            className='price ml-auto text-left clearfix d-block'
            style={{ fontSize: '14px' }}
          >
            Giá: {convertPrice(unitPrice)}
          </span>
        </p>
        <span className='variantTotalPrice price font-weight-bold ml-auto text-right clearfix'>
          {convertPrice(unitPrice * quantity)}
        </span>
      </div>
      <div className='number-input d-inline-flex rounded'>
        <button
          className='position-relative m-0 border-0 step-down-qty js-step-qty'
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        />
        <input
          value={quantity}
          className='quantity text-center'
          readOnly
          min={1}
          name='Lines'
          size={2}
          type='number'
        />
        <button
          className='position-relative m-0 border-0 step-up-qty js-step-qty plus'
          onClick={() => {
            if (quantity < 10) {
              setQuantity(quantity + 1);
            }
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch(deleteFromCart({ id: product.id }));
        }}
        className='btn btn-outline-danger remove ml-auto remove-item-cart'
        title='Xóa sản phẩm'
      >
        Xoá
      </button>
    </div>
  );
}

export default CartItem;
