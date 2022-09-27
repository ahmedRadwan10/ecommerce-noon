import React, { useEffect } from "react";
import ImageSlider from "../../components/Collection/ImageSlider";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSliderImgs } from "../../apis/collection";


const Home = () => {
  const sliderImgs = useSelector(({ sliderState }) => sliderState.sliderImgs);
  const headerImg = useSelector(({ sliderState }) => sliderState.headerImg);
  const dispatch = useDispatch();

  useEffect(() => {
    getSliderImgs(dispatch, 'homeSlider');
  },[])

    return (
        <div className={styles.home_container}>
          <ImageSlider sliderImgs={sliderImgs} headerImg={headerImg} />
        </div>
    );
};

export default Home;
