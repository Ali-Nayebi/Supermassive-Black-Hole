import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state';
import Master from './Master';

const store = configureStore({
  reducer: { cart: cartReducer }, // we can have multiple reducers here
});

export default function ProOne() {
  return (
    <Provider store={store}>
      <Master />
    </Provider>
  );
}
