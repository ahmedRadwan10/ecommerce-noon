import { fetchCategories } from "../redux/slices/categorySlice";

export async function getCategories(dispatch) {
    const response = await fetch('../data/categories.json');
    const { data } = await response.json();
    const categories = [];
    Object.keys(data).forEach(key => {
        if (data[key].order <= 5) categories.push({ id: key, ...data[key] });
    });
    categories.sort((a, b) => a.order - b.order);
    dispatch(fetchCategories(categories));
}