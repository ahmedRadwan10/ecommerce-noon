import React, { useEffect } from "react";
import ImageSlider from "../../components/Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import QuickReach from "../Collection/QuickReach";
import ProductsOverview from "../Collection/ProductsOverview";
import Cards from "../Collection/Cards";
import { getElectronicsCards, getHomeSlider, getHotDealsProducts, getQuickReach } from "../../apis/firebase";
import Footer from "../Footer/Footer";


const Home = () => {
  const slider = useSelector(({ collectionState }) => collectionState.slider);
  const quickReachImgs = useSelector(({ collectionState }) => collectionState.quickReachImgs);
  const hotDealsProducts = useSelector(({ collectionState }) => collectionState.hotDealsProducts);
  const electronicsCards = useSelector(({ collectionState }) => collectionState.electronicsCards);
  const dispatch = useDispatch();

  useEffect(() => {
    getHomeSlider(dispatch);
    getQuickReach(dispatch);
    getHotDealsProducts(dispatch);
    getElectronicsCards(dispatch);
  }, []);

    return (
        <div className={styles.home_container}>
          <ImageSlider slider={slider} />
          <QuickReach imgs={quickReachImgs} />
          <ProductsOverview title={"Hot deals"} products={hotDealsProducts} />
          <Cards cards={electronicsCards} />
          <Footer />
        </div>
    );
};

export default Home;
