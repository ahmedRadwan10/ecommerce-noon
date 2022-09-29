import React, { useEffect } from "react";
import ImageSlider from "../../components/Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getElectronicsCards, getHotDealsProducts, getQuickReachImgs, getSliderImgs } from "../../apis/collection";
import QuickReach from "../Collection/QuickReach";
import ProductsOverview from "../Collection/ProductsOverview";
import Cards from "../Collection/Cards";


const Home = () => {
  const slider = useSelector(({ collectionState }) => collectionState.slider);
  const quickReachImgs = useSelector(({ collectionState }) => collectionState.quickReachImgs);
  const hotDealsProducts = useSelector(({ collectionState }) => collectionState.hotDealsProducts);
  const electronicsCards = useSelector(({ collectionState }) => collectionState.electronicsCards);
  const dispatch = useDispatch();

  useEffect(() => {
    getSliderImgs(dispatch, 'homeSlider');
    getQuickReachImgs(dispatch, 'homeQuickReach');
    getHotDealsProducts(dispatch, 'hotDealsProducts');
    getElectronicsCards(dispatch, 'electronicsCards');
  }, []);

    return (
        <div className={styles.home_container}>
          <ImageSlider slider={slider} />
          <QuickReach imgs={quickReachImgs} />
          <ProductsOverview title={"Hot deals"} products={hotDealsProducts} />
          <Cards cards={electronicsCards} />
          <ProductsOverview title={"Mobile deals"} products={[]} />
        </div>
    );
};

export default Home;
