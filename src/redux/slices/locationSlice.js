import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      address: "Cairo",
      lat: 30.033333,
      lng: 31.233334,
      addressChanged: false
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    updateLocationAddress: (state, action) => {
      state.address = action.payload;
    },
    updateLocationLatlng: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
    confirmAddressChanged: (state) => {
      state.addressChanged = true;
    },
    resetAddressChanged: (state) => {
      state.addressChanged = false;
    }
  }
});

export const { updateLocationAddress, updateLocationLatlng, confirmAddressChanged, resetAddressChanged } = locationSlice.actions;

export default locationSlice.reducer;