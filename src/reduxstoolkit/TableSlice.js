import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    table: [],
  },
  reducers: {
    addValue: (state, action) => {
        state.table.push(action.payload);
      },
  },
});
export const { addValue } = tableSlice.actions;

export default tableSlice.reducer;
