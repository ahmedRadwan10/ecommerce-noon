import React, { useEffect } from "react";
import ImageSlider from "../../components/Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSliderImgs } from "../../apis/collection";


const Home = () => {
  const sliderImgsArr = useSelector(state => console.log(state.sliderState));
  const headerImgURL = useSelector(state => state.sliderState.currentSlider.payload.headerImg);
  const dispatch = useDispatch();

  useEffect(() => {
    getSliderImgs(dispatch, 'homeSlider');
  }, [])

    return (
        <div className={styles.home_container}>
          <ImageSlider sliderImgs={sliderImgsArr} headerImg={headerImgURL} />
        </div>
    );
};

export default Home;
