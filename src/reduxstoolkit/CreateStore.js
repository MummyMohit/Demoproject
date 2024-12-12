import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reduxstoolkit/productSlice'
import tableSlice from '../reduxstoolkit/TableSlice'
import formSlice from '../reduxstoolkit/FormSlice'
const store = configureStore({
  reducer: {
    products: productsReducer,
    table:tableSlice,
    form:formSlice
  },
});

export default store;

