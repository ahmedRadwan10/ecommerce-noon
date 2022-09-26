import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice';
import sliderReducer from './slices/sliderSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
    reducer: {
        categoryState: categoryReducer,
        sliderState: sliderReducer,
        locationState: locationReducer
      },
});