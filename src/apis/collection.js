import { fetchElectronicsCards, fetchHotDealsProducts, fetchQuickReachImgs, fetchSlider} from "../redux/slices/collectionSlice";


export const getSliderImgs = async (dispatch, content) => {
    console.log("first")
    try {
        const response = await fetch(`https://ahmedradwan10.github.io/api/db.json`);
        const data = await response.json();
        console.log(data[content])
        dispatch(fetchSlider(data[content]));
    } catch (error) {
        console.error(error.message);
    }
}

export const getQuickReachImgs =  async (dispatch, content) => {
    try {
        const response = await fetch(`https://ahmedradwan10.github.io/api/db.json`);
        const data = await response.json();
        dispatch(fetchQuickReachImgs(data[content]));
    } catch (error) {
        console.error(error.message);
    }
}

export const getHotDealsProducts = async (dispatch, content) => {
    try {
        const response = await fetch(`https://ahmedradwan10.github.io/api/db.json`);
        const data = await response.json();
        dispatch(fetchHotDealsProducts(data[content]));
    } catch (error) {
        console.error(error.message);
    }
}

export const getElectronicsCards = async (dispatch, content) => {
    try {
        const response = await fetch(`https://ahmedradwan10.github.io/api/db.json`);
        const data = await response.json();
        dispatch(fetchElectronicsCards(data[content]));
    } catch (error) {
        console.error(error.message);
    }
}
