import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice';
import collectionReducer from './slices/collectionSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
    reducer: {
        categoryState: categoryReducer,
        collectionState: collectionReducer,
        locationState: locationReducer
      },
});