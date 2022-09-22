import React from "react";
import ImageSlider from "./ImageSlider";
import styles from "./Collection.module.css";


const Collection = () => {
    return (
        <div className={styles.collection_container}>
          <ImageSlider />
        </div>
    );
};

export default Collection;
