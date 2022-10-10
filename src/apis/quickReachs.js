import { fetchQuickReachImgs } from "../redux/slices/collectionSlice";

export async function getQuickReachs(dispatch) {
    const response = await fetch('../data/quickReachs.json');
    const { data } = await response.json();
    dispatch(fetchQuickReachImgs(data["W7gRWi02cDPOF2GCfMKj"].imgs));
}