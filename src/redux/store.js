import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice';
import sliderReducer from './slices/sliderSlice';

export const store = configureStore({
    reducer: {
        categoryState: categoryReducer,
        sliderState: sliderReducer
      },
});