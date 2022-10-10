import { fetchSlider } from "../redux/slices/collectionSlice";

export async function getHomeSlider(dispatch) {
    const response = await fetch('../data/sliders.json');
    const { data } = await response.json();
    dispatch(fetchSlider(data["Hp5Phcj0pBnB1RsqsUW7"]));
}