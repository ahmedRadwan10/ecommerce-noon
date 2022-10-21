import React, { lazy, Suspense, useEffect } from "react";
import ImageSlider from "../Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import QuickReach from "../Collection/QuickReach";
import { getSlider } from "../../apis/sliders";
import { getQuickReach } from "../../apis/quickReachs";
import { getAllDealsProducts, getHotDealsProducts } from "../../apis/products";



const Home = () => {
  
  const ProductsOverview = lazy(async () =>  {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(
      () => import("../Collection/ProductsOverview")
    );
  });

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
  }, [dispatch]);

    return (
            <div className={styles.home_container}>
                <ImageSlider slider={slider} />       
                <QuickReach quickReach={quickReach} />
                <Suspense fallback={''}>
                  { renderProductsOverviews() } 
                </Suspense>
            </div>
    );
};

export default Home;
