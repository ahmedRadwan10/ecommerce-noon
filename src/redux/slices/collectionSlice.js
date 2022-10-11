import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sliders: {},
  quickReachs: {},
  deals: {},
  cards: []
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchSlider: (state, action) => {
      const pageName = action.payload.pageName;
      state.sliders[pageName] = (({ headerImg, sliderImgs }) => ({ headerImg, sliderImgs }))(action.payload);
    },
    fetchQuickReach: (state, action) => {
      const pageName = action.payload.pageName;
      state.quickReachs[pageName] = (({ imgs }) => ({ imgs }))(action.payload);
    },
    fetchDeal: (state, action) => {
      const dealTitle = action.payload.title;
      state.deals[dealTitle] = (({ products }) => ({ products }))(action.payload);
    },
    fetchCard: (state, action) => {
      state.cards = action.payload;
    },
  }
});

export const { fetchSlider, fetchQuickReach, fetchDeal, fetchCard } = collectionSlice.actions;
export default collectionSlice.reducer;