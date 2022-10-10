import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      categories: [],
      selectedCategory: {},
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    removeSelectedCategory: (state) => {
          state.selectedCategory = {};
    }
  }
});

export const { fetchCategories, selectCategory, removeSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;