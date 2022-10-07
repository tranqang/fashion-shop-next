const { createSlice } = require('@reduxjs/toolkit');
import Link from 'next/link';
import { toast } from 'react-toastify';
import { productData } from '../../data/data';
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
      const productName = productData.find(
        product => product.id === action.payload.productId
      ).name;
      toast.success(
        <>
          <div className='toast-title'>Thành công</div>
          <div className='toast-message'>
            {`Sản phẩm ${productName} đã được thêm vào giỏ hàng`}
            <Link href='/cart'>
              <a title='Giỏ hàng' className='d-block'>
                [Tới giỏ hàng]
              </a>
            </Link>
          </div>
        </>
      );
    },
    deleteFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload.id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(newState));
      }
      return newState;
    },
    updateCart: (state, action) => {
      state.find(item => item.id === action.payload.id).quantity =
        action.payload.quantity;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    increaseCart: (state, action) => {
      console.log('increase checking');
      return state;
    },
    increaseCartSuccess: (state, action) => {
      state.find(item => item.id === action.payload.id).quantity +=
        action.payload.quantity;
      const productName = productData.find(
        product => product.id === action.payload.productId
      ).name;
      toast.success(
        <>
          <div className='toast-title'>Thành công</div>
          <div className='toast-message'>
            {`Sản phẩm ${productName} đã được thêm vào giỏ hàng`}
            <Link href='/cart'>
              <a title='Giỏ hàng' className='d-block'>
                [Tới giỏ hàng]
              </a>
            </Link>
          </div>
        </>
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    increaseCartFailure: (state, action) => {
      const productName = productData.find(
        product => product.id === action.payload.productId
      ).name;
      toast.error(
        <>
          <div className='toast-title'>Thất bại</div>
          <div className='toast-message'>
            {`Sản phẩm ${productName} đã hết hàng`}
            <Link href='/cart'>
              <a title='Giỏ hàng' className='d-block'>
                [Tới giỏ hàng]
              </a>
            </Link>
          </div>
        </>
      );
    },
    reload: (state, action) => {
      return action.payload;
    },
  },
});
export const {
  addToCart,
  deleteFromCart,
  updateCart,
  increaseCart,
  increaseCartSuccess,
  increaseCartFailure,
  reload,
} = cartSlice.actions;
export default cartSlice.reducer;
