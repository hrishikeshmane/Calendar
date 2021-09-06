import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: "Calendar"
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const {setPage} = appSlice.actions;

export const selectPage = (state) => state.app.page;

export default appSlice.reducer;