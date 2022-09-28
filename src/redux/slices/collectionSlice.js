import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerImg: "",
  sliderImgs: [],
  quickReachImgs: [],
  hotDealsProducts: []
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchSlider: (state, action) => {
      state.sliderImgs = action.payload.sliderImgs;
      state.headerImg = action.payload.headerImg;
    },
    fetchQuickReachImgs: (state, action) => {
      state.quickReachImgs = action.payload;
    },
    fetchHotDealsProducts: (state, action) => {
      state.hotDealsProducts = action.payload;
    },
  }
});

export const { fetchSlider, fetchQuickReachImgs, fetchHotDealsProducts } = collectionSlice.actions;

export default collectionSlice.reducer;