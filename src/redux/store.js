import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice/categorySlice';
import productSlice from './productSlice/productSlice';

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
  },
});
