import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $axios from '../../../plugins/axios';

export const getTest = createAsyncThunk(`test/getTest`, async (query) => {
  const response = await $axios.get(
    process.env.REACT_APP_DUMMY === 'true'
      ? `/carts/index.json?q=` + query
      : query !== undefined
      ? '/cart?page=' + query.page
      : '/cart',
  );
  return response.data;
});

const slice = createSlice({
  name: `test`,
  initialState: {
    isLoading: false,
    error: null,
    carts: {},
    totalPrice: 0,
  },
  reducers: {
    resetError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
  },
  extraReducers: {
    [getTest.pending]: (state) => {
      state.isLoading = true;
    },
    [getTest.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.carts = action.payload.data;
    },
    [getTest.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

const reducer = slice.reducer;
export default reducer;

export const { resetError } = slice.actions;
