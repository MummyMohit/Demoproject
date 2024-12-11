import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reduxstoolkit/productSlice'
import tableSlice from '../reduxstoolkit/TableSlice'
const store = configureStore({
  reducer: {
    products: productsReducer,
    table:tableSlice
  },
});

export default store;

