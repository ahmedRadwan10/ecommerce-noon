import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, responseData) => {
          state.data = responseData;
    }
  },
})

export const { fetchCategories } = categorySlice.actions;

export default categorySlice.reducer;