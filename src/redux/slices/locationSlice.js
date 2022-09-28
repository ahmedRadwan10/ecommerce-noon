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
      state.lat = Number(action.payload.lat.toFixed(6));
      state.lng = Number(action.payload.lng.toFixed(6));
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