import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  subCategories: [],
  selectedCategory: {},
  selectedSubCategory: {},
  selectedProduct: {},
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
    },
    selectSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
    removeSelectedSubCategory: (state) => {
      state.selectedSubCategory = {};
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    removeSelectedProduct: (state) => {
      state.selectedProduct = {};
    }
  }
});

export const { fetchCategories, selectSubCategories, removeSubCategories, selectCategory, removeSelectedCategory, selectSubCategory, removeSelectedSubCategory, selectProduct, removeSelectedProduct } = categorySlice.actions;

export default categorySlice.reducer;