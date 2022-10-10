import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slider: {},
  quickReachImgs: [],
  deals: [],
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
    fetchDeal: (state, action) => {
      state.deals.push(action.payload);
    },
    fetchElectronicsCards: (state, action) => {
      state.electronicsCards = action.payload;
    },
  }
});

export const { fetchSlider, fetchQuickReachImgs, fetchDeal, fetchElectronicsCards } = collectionSlice.actions;
export default collectionSlice.reducer;