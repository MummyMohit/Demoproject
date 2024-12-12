import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    form: [],
  },
  reducers: {
    addform: (state, action) => {
        state.form.push(action.payload);
      },
  },
});
export const { addform } = formSlice.actions;

export default formSlice.reducer;
