import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentLocation: {
    payload: "Cairo"
  }
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    updateLocation: (state, newLocation) => {
          state.currentLocation = newLocation;
    },
  }
});

export const { updateLocation } = locationSlice.actions;

export default locationSlice.reducer;