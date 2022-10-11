import { fetchQuickReach } from "../redux/slices/collectionSlice";

export async function getQuickReach(dispatch, pageName) {
    const response = await fetch('../data/quickReachs.json');
    const { data } = await response.json();
    dispatch(fetchQuickReach({ ...data[pageName], pageName }));
}