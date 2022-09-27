import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      allCategories: [],
      selectedCategory: {},
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
          state.allCategories = action.payload;
    },
        selectCategory: (state, action) => {
          state.selectedCategory = action.payload[0];
    },
    removeSelectedCategory: (state) => {
          state.selectedCategory = {};
    }
  }
});

export const { fetchCategories, selectCategory, removeSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;