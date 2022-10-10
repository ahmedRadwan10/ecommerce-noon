import React, { useEffect } from "react";
import ImageSlider from "../../components/Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import QuickReach from "../Collection/QuickReach";
import ProductsOverview from "../Collection/ProductsOverview";
import { getHomeSlider } from "../../apis/sliders";
import { getQuickReachs } from "../../apis/quickReachs";
import { getAllDealsProducts, getHotDealsProducts } from "../../apis/products";


const Home = () => {
  const slider = useSelector(({ collectionState }) => collectionState.slider);
  const quickReachImgs = useSelector(({ collectionState }) => collectionState.quickReachImgs);
  const deals = useSelector(({ collectionState }) => collectionState.deals);
  const dispatch = useDispatch();

  const renderProductsOverviews = () => {
    return deals.map(deal => <ProductsOverview key={deal.title} deal={deal} />);
  }

  useEffect(() => {
    getHomeSlider(dispatch);
    getQuickReachs(dispatch);
    getHotDealsProducts(dispatch);
    getAllDealsProducts(dispatch);
  }, []);

    return (
        <div className={styles.home_container}>
          <ImageSlider slider={slider} />       
          <QuickReach imgs={quickReachImgs || []} />
          { renderProductsOverviews() }
        </div>
    );
};

export default Home;
