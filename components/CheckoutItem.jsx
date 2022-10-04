import React from 'react';
import { useEffect } from 'react';
import { productData, sizeData } from '../data/data';
import convertPrice from '../helpers/convertPrice';

function CheckoutItem({ item }) {
  const product = productData.find(product => product.id === item.productId);
  const unitPrice = product.price.find(
    current => current.size === item.size && current.color === item.color
  ).unit_price;
  const productPrice = unitPrice * item.quantity;

  const colorImage = product.color_image.find(
    current => current.color === item.color
  ).images[0];
  return (
    <tr className='product'>
      <td className='product__image'>
        <div className='product-thumbnail'>
          <div className='product-thumbnail__wrapper' data-tg-static>
            <img
              src={colorImage}
              alt=''
              className='product-thumbnail__image mb'
            />
          </div>
          <span className='product-thumbnail__quantity'>{item.quantity}</span>
        </div>
      </td>
      <th className='product__description'>
        <span className='product__description__name'>{product.name}</span>
        <span className='product__description__property'>
          Size: {sizeData.find(current => current.id === item.size).name}
        </span>
      </th>
      <td className='product__quantity visually-hidden'>
        <em>Số lượng:</em> {item.quantity}
      </td>
      <td className='product__price'>{convertPrice(productPrice)}</td>
    </tr>
  );
}

export default CheckoutItem;
