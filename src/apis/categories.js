import { fetchCategories } from "../redux/slices/categorySlice";

export const getCategories =  async (dispatch) => {
    const response = await fetch('https://ahmedradwan10.github.io/api/db.json')
    const data = await response.json();
    dispatch(fetchCategories(data.categories));
}
