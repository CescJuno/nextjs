import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import $axios from '../../../plugins/axios';

export interface TestState {
  isLoading: boolean;
  error:object,
  carts:object,
  totalPrice:number,
}

const initialState: TestState = {
  isLoading: false, 
  error: null,
  carts: {},
  totalPrice: 0,
};
export const getTest = createAsyncThunk(`test/getTest`, async (query:string) => {
  const response = await $axios.get(
    process.env.REACT_APP_DUMMY === 'true'
      ? `/carts/index.json?q=` + query
      : query !== undefined
      ? '/cart?page=' + query
      : '/cart',
  );
  return response.data;
});

const slice = createSlice({
  name: `test`,
  initialState,
  reducers: {
    resetError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts = action.payload;
      });
  },
});

const reducer = slice.reducer;
export default reducer;

export const { resetError,setTotalPrice } = slice.actions;
export const selectTotalPrice = (state: RootState) => state.testReducer.totalPrice;
export const incrementIfOdd = (price: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentTotalPrice = selectTotalPrice(getState());
  dispatch(setTotalPrice(price));
};
 