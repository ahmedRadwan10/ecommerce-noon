import { fetchHotDealsProducts, fetchQuickReachImgs, fetchSlider} from "../redux/slices/collectionSlice";


export const getSliderImgs =  async (dispatch, content) => {
    const response = await fetch(`http://localhost:4000/${content}`);
    const data = await response.json();
    dispatch(fetchSlider(data));
}

export const getQuickReachImgs =  async (dispatch, content) => {
    const response = await fetch(`http://localhost:4000/${content}`);
    const data = await response.json();
    dispatch(fetchQuickReachImgs(data));
}

export const getHotDealsProducts =  async (dispatch, content) => {
    const response = await fetch(`http://localhost:4000/${content}`);
    const data = await response.json();
    dispatch(fetchHotDealsProducts(data));
}
