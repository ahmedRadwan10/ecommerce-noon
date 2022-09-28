import React, { useEffect } from "react";
import ImageSlider from "../../components/Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotDealsProducts, getQuickReachImgs, getSliderImgs } from "../../apis/collection";
import QuickReach from "../Collection/QuickReach";
import ProductsOverview from "../Collection/ProductsOverview";


const Home = () => {
  const sliderImgs = useSelector(({ collectionState }) => collectionState.sliderImgs);
  const headerImg = useSelector(({ collectionState }) => collectionState.headerImg);
  const quickReachImgs = useSelector(({ collectionState }) => collectionState.quickReachImgs);
  const hotDealsProducts = useSelector(({ collectionState }) => collectionState.hotDealsProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    getSliderImgs(dispatch, 'homeSlider');
    getQuickReachImgs(dispatch, 'homeQuickReach');
    getHotDealsProducts(dispatch, 'hotDealsProducts');
  }, []);

    return (
        <div className={styles.home_container}>
          <ImageSlider sliderImgs={sliderImgs} headerImg={headerImg} />
          <QuickReach imgs={quickReachImgs} />
          <ProductsOverview title={"Hot deals"} products={hotDealsProducts}/>
        </div>
    );
};

export default Home;
