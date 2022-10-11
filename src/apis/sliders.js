import { fetchSlider } from "../redux/slices/collectionSlice";

export async function getSlider(dispatch, pageName) {
    const response = await fetch('../data/sliders.json');
    const { data } = await response.json();
    dispatch(fetchSlider({ ...data[pageName], pageName }));
}