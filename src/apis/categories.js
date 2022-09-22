import { fetchCategories } from "../redux/slices/categorySlice";

export const getCategories =  async (dispatch) => {
    const response = await fetch('http://localhost:4000/categories')
    const data = await response.json();
    dispatch(fetchCategories(data));
}
