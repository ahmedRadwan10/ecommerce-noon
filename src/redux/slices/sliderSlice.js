import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSlider: {}
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    fetchSlider: (state, responseData) => {
          state.currentSlider = responseData;
    },
  }
});

export const { fetchSlider } = sliderSlice.actions;

export default sliderSlice.reducer;