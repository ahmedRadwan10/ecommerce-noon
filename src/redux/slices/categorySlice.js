import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      allCategories: [],
      selectedCategory: {},
      categoryOverview: {
        isVisible: false,
      }
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
    },
    showCategoryOverview: (state) => {
      state.categoryOverview.isVisible = true;
    },
    hideCategoryOverview: (state) => {
      state.categoryOverview.isVisible = false;
    },
  }
});

export const { fetchCategories, selectCategory, removeSelectedCategory, showCategoryOverview, hideCategoryOverview } = categorySlice.actions;

export default categorySlice.reducer;