import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  subCategories: [],
  selectedCategory: {},
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectSubCategories: (state, action) => {
      state.subCategories.push(action.payload);
    },
    removeSubCategories: (state) => {
      state.subCategories = [];
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    removeSelectedCategory: (state) => {
          state.selectedCategory = {};
    }
  }
});

export const { fetchCategories, selectSubCategories, removeSubCategories, selectCategory, removeSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;