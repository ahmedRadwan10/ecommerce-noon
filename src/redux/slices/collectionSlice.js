import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slider: {},
  quickReachImgs: [],
  hotDealsProducts: [],
  mobileDealsProducts: [],
  electronicsCards: []
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchSlider: (state, action) => {
      state.slider = action.payload;
    },
    fetchQuickReachImgs: (state, action) => {
      state.quickReachImgs = action.payload;
    },
    fetchHotDealsProducts: (state, action) => {
      state.hotDealsProducts = action.payload;
    },
    fetchElectronicsCards: (state, action) => {
      state.electronicsCards = action.payload;
    },
  }
});

export const { fetchSlider, fetchQuickReachImgs, fetchHotDealsProducts, fetchElectronicsCards } = collectionSlice.actions;

export default collectionSlice.reducer;