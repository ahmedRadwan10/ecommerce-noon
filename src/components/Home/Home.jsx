import React, { useEffect } from "react";
import ImageSlider from "../Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import QuickReach from "../Collection/QuickReach";
import ProductsOverview from "../Collection/ProductsOverview";
import { getSlider } from "../../apis/sliders";
import { getQuickReach } from "../../apis/quickReachs";
import { getAllDealsProducts, getHotDealsProducts } from "../../apis/products";

const Home = () => {
  const slider = useSelector(({ collectionState }) => collectionState.sliders["home"]);
  const quickReach = useSelector(({ collectionState }) => collectionState.quickReachs["home"]);
  const deals = useSelector(({ collectionState }) => collectionState.deals);
  const dispatch = useDispatch();

  const renderProductsOverviews = () => {
    return Object.keys(deals).map(dealTitle => <ProductsOverview key={dealTitle} data={{ title: dealTitle, ...deals[dealTitle] }} />);
  }

  useEffect(() => {
    getSlider(dispatch, "home");
    getQuickReach(dispatch, "home");
    getHotDealsProducts(dispatch, 50);
    getAllDealsProducts(dispatch, 30);
  }, []);

    return (
        <div className={styles.home_container}>
          <ImageSlider slider={slider} />       
          <QuickReach quickReach={quickReach} />
          { renderProductsOverviews() } 
        </div>
    );
};

export default Home;
