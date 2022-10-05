import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { fetchCategories } from "../redux/slices/categorySlice";
import { fetchElectronicsCards, fetchHotDealsProducts, fetchQuickReachImgs, fetchSlider } from "../redux/slices/collectionSlice";

const firebaseConfig = {
    apiKey: "AIzaSyDRAW5p05w54z6Oh9xDZsi-XNyySdw1e0I",
    authDomain: "ecommerce-noon-clone.firebaseapp.com",
    projectId: "ecommerce-noon-clone",
    storageBucket: "ecommerce-noon-clone.appspot.com",
    messagingSenderId: "775180119006",
    appId: "1:775180119006:web:f728ef6b5fb665c7590b4f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getCategories(dispatch) {
    const categories = [];
    await getDocs(collection(db, "categories")).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            categories.push({ ...doc.data(), id: doc.id });
        });
    })
    .then(() => {
            categories.sort((a, b) => a.order - b.order);
            dispatch(fetchCategories(categories));
    })
    .catch(err => console.error(err.message));
}

export async function getHomeSlider(dispatch) {
    let slider = {};
    await getDocs(collection(db, "sliders")).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            slider = { ...doc.data() };
        });
    })
    .then(() => {
        dispatch(fetchSlider(slider));
    })
    .catch(err => console.error(err.message));
}

export async function getQuickReach(dispatch) {
    let quickReachImgs = [];
    await getDocs(collection(db, "quickReachs")).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            quickReachImgs.push({ ...doc.data() });
        });
    })
    .then(() => {
        dispatch(fetchQuickReachImgs(quickReachImgs[0].imgs));
    })
    .catch(err => console.error(err.message));
}

export async function getHotDealsProducts(dispatch) {
    let hotDealsProducts = [];
    await getDocs(collection(db, "hotDealsProducts")).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            hotDealsProducts.push({ ...doc.data() });
        });
    })
    .then(() => {
        dispatch(fetchHotDealsProducts(hotDealsProducts[0].products));
    })
    .catch(err => console.error(err.message));
}

export async function getElectronicsCards(dispatch) {
    let electronicsCards = {};
    await getDocs(collection(db, "electronicsCards")).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            electronicsCards = { ...doc.data() };
        });
    })
        .then(() => {
        dispatch(fetchElectronicsCards(electronicsCards));
    })
    .catch(err => console.error(err.message));
}