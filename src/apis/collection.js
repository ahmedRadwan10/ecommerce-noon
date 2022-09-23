import { fetchSlider} from "../redux/slices/sliderSlice";


export const getSliderImgs =  async (dispatch, content) => {
    const response = await fetch(`http://localhost:4000/${content}`);
    const data = await response.json();
    dispatch(fetchSlider(data));
}
