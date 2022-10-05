import React, { useEffect } from 'react';
import { useState } from 'react';
import { sizeData } from '../data/data';
import convertPrice from '../helpers/convertPrice';
import divideBy from '../helpers/divideBy';
import CartIcon from '../components/icons/CartIcon';
import TickBoldIcon from '../components/icons/TickBoldIcon';
import {
  addToCart,
  increaseCart,
  updateCart,
} from '../redux/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
function ProductFormSelect({ product, colorSelect, setColorSelect }) {
  const [sizeDisplay, setSizeDisplay] = useState([]);
  const [colorDisplay, setColorDisplay] = useState([]);
  const [sizeSelect, setSizeSelect] = useState({ id: null });
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const size = sizeData.filter(item =>
      divideBy('size', product.price).includes(item.id)
    );
    if (size.length > 0) {
      setSizeDisplay(size);
      setSizeSelect(size[0]);
    }
    if (product.color_image) {
      setColorDisplay(product.color_image);
      setColorSelect(product.color_image[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  useEffect(() => {
    if (product.price) {
      const priceDisplay = product.price.find(item => {
        return item.color === colorSelect.color && item.size === sizeSelect.id;
      });
      setPrice(priceDisplay);
    }
  }, [sizeSelect, colorSelect, product]);

  const handleSize = id => {
    setSizeSelect(id);
  };
  const handleColor = id => {
    setColorSelect(id);
  };
  const handleCart = e => {
    e.preventDefault();
    dispatch(
      increaseCart({
        item: {
          productId: product.id,
          size: sizeSelect.id,
          color: colorSelect.color,
          quantity,
        },
        totalCart: cart,
      })
    );
  };
  return (
    <>
      <div className='product-info position-relative'>
        {price && (
          <span
            className={`inventory_quantity ${
              price.quantity > 0 ? 'text-success' : 'text-danger'
            } `}
          >
            {price.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}
          </span>
        )}
      </div>
      <div className='product-info position-relative'>
        Thương hiệu: <span id='vendor'>Mew Fashion</span>
      </div>
      <div className='product-info position-relative'>
        Loại: <span id='type'>Áo thun</span>
      </div>
      <form
        onSubmit={handleCart}
        // action='/cart/add'
        method='post'
        encType='multipart/form-data'
        id='add-to-cart-form'
      >
        <input
          type='hidden'
          name='productAlias'
          defaultValue='ao-thun-t-shirt-m-f-08'
        />
        <div className='row align-items-start pt-3 pb-2'>
          <div className='mb-4 px-3'>
            <div
              className='d-sm-flex align-items-center  swatch clearfix flex-wrap'
              data-option-index={0}
            >
              {sizeDisplay.length > 0 && (
                <div className='header font-weight-bold mb-2'>Kích thước</div>
              )}
              {sizeDisplay.map(size => (
                <div
                  key={size.id}
                  data-value={size.name}
                  className='swatch-element L position-relative mb-2 mr-2 float-left'
                >
                  <input
                    onChange={() => handleSize(size)}
                    checked={size.id === sizeSelect.id}
                    id='swatch-0-l'
                    className='position-absolute w-100 m-0'
                    type='radio'
                    name='option-0'
                    defaultValue={size.name}
                  />
                  <label
                    title={size.name}
                    htmlFor='swatch-0-l'
                    className='border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                  >
                    {size.name}
                  </label>
                  <div className='product-variation__tick position-absolute'>
                    <TickBoldIcon />
                  </div>
                </div>
              ))}
            </div>
            <div
              className='d-sm-flex align-items-center swatch-color swatch clearfix flex-wrap'
              data-option-index={1}
            >
              <div className='header font-weight-bold mb-2'>Màu sắc</div>

              {colorDisplay.map((color, index) => (
                <div
                  key={color.color}
                  data-value={color.color}
                  className='swatch-element color Nâu position-relative mb-2 mr-2 float-left'
                >
                  <input
                    onChange={() => handleColor(color)}
                    checked={color.color === colorSelect.color}
                    id='swatch-1-nau'
                    className='position-absolute w-100 m-0'
                    type='radio'
                    name='option-1'
                    defaultValue={color.color}
                  />
                  <label
                    title={color.color}
                    htmlFor='swatch-1-nau'
                    className='sw-color-nau border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                    style={{
                      backgroundImage: `url("${color.images[index]}")`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      backgroundColor: 'rgb(198, 123, 0)',
                    }}
                  />
                  <div className='product-variation__tick position-absolute'>
                    <TickBoldIcon />
                  </div>
                </div>
              ))}
            </div>
            {price && (
              <div className='product-price font-weight-bold mt-2 mb-2 position-relative '>
                <span className='cl_swatch f_price'>Giá: </span>
                <span className='special-price m-0 cl_swatch'>
                  {convertPrice(price.unit_price)}
                </span>
                <del className='old-price m-0'>
                  {convertPrice(price.old_price)}
                </del>
              </div>
            )}

            <div className='d-inline-flex banner-w position-relative modal-open buy_mewshoes clearfix bg_swatch align-items-center justify-content-center pt-2 pb-2 pl-3 pr-3'>
              <button
                type='submit'
                className='border-0 product-action_buy js-addToCart p-0 d-flex disabled'
              >
                <CartIcon />
                <span className='mr-3'>Mua hàng</span>
              </button>
              <div className='product-quantity modal-open d-block'>
                <label htmlFor='qtym' style={{ fontSize: 0 }}>
                  Số lượng:
                </label>
                <div className='custom-btn-number d-inline-block form-inline border-0 position-relative'>
                  <input
                    type='text'
                    maxLength={2}
                    id='qtym'
                    name='quantity'
                    value={quantity}
                    onChange={() => setQuantity(quantity)}
                    className='border-0 form-control text-center prd_quantity font-weight-bold'
                  />
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className='border-0 position-absolute minus'
                    type='button'
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      if (quantity < price.quantity) {
                        setQuantity(quantity + 1);
                      }
                    }}
                    className='border-0 position-absolute plus'
                    type='button'
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductFormSelect;
