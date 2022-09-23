import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      allCategories: [],
      selectedCategory: {},
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, responseData) => {
          state.allCategories = responseData;
    },
    selectCategory: (state, category) => {
          state.selectedCategory = category;
    },
    removeSelectedCategory: (state) => {
          state.selectedCategory = {};
    }
  }
});

export const { fetchCategories, selectCategory, removeSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;