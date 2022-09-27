import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sliderImgs: [],
  headerImg: ""
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    fetchSlider: (state, action) => {
      state.sliderImgs = action.payload.sliderImgs;
      state.headerImg = action.payload.headerImg;
    },
  }
});

export const { fetchSlider } = sliderSlice.actions;

export default sliderSlice.reducer;