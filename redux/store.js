import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import toggleReducer from './reducers/toggleSlice';
import cartReducer from './reducers/cartSlice';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import filterReducer from './reducers/filterSlice';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});
sagaMiddleware.run(rootSaga);
const makeStore = () => {
  return store;
};
export const wrapper = createWrapper(makeStore);
