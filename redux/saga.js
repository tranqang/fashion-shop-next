import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { productData } from '../data/data';
import {
  addToCart,
  deleteFromCart,
  increaseCart,
  increaseCartFailure,
  increaseCartSuccess,
  saveToStorage,
  updateCart,
} from './reducers/cartSlice';

function* cartChecking(action) {
  const { totalCart, item } = action.payload;
  console.log(totalCart, item);
  const existProduct = totalCart.find(
    current =>
      current.productId === item.productId &&
      current.size === item.size &&
      current.color === item.color
  );
  console.log('existProduct', existProduct);
  if (!existProduct) {
    yield put(
      addToCart({
        id: uuidv4(),
        ...item,
      })
    );
  } else {
    const totalQuantity = productData
      .find(current => current.id === item.productId)
      .price.find(
        priceItem =>
          priceItem.color === item.color && priceItem.size === item.size
      ).quantity;
    if (existProduct.quantity + item.quantity < totalQuantity)
      yield put(
        increaseCartSuccess({
          id: existProduct.id,
          quantity: item.quantity,
          productId: existProduct.productId,
        })
      );
    else {
      yield put(increaseCartFailure({ productId: existProduct.productId }));
    }
  }
}
function* watchIncrementCart() {
  yield takeEvery(increaseCart().type, cartChecking);
}

function* rootSaga() {
  yield all([watchIncrementCart()]);
}
export default rootSaga;
