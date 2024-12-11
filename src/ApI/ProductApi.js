import axios from 'axios';
import { fetchStart, fetchSuccess, fetchFailure } from '../reduxstoolkit/productSlice'

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
