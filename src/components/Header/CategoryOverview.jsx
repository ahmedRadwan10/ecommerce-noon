import React, { useEffect, useState } from "react";
import styles from "./CategoryOverview.module.css";

const CategoryOverview = ({ categories, category, removeCategory }) => {
    const [visible, setVisibility] = useState(false);


    const displaySubCategories = () => {
        return categories.map(
            (cat) => {
                if (cat.id === category.id) {
                    return cat.subCategories.map((sub) =>
                        <li key={sub}>{sub}</li>
                    )
                }
            }
        );
    }

    const displayTopBrands = () => {
        return categories.map(
            (cat) => {
                if (cat.id === category.id) {
                    return cat.topBrands.map((brandURL) =>
                        <img key={brandURL} src={brandURL} alt="Brand" />
                    )
                }
            }
        );
    }

    const displayPhotos = () => {
        if (category) return (
            <>
                <img src={category.photos[0]} alt="Category" />
                <img src={category.photos[1]} alt="Category" />
            </>
        );
    }

    const hideCategoryOverview = () => {
        console.log("left  !!!1");
        removeCategory();
    }

    useEffect(() => {
        if (category !== null && category.id <= 7) setVisibility(true);
        else setVisibility(false);
    }, [category])

    return (
        <div className={styles.category_overview}
            style={visible ? { display: 'flex' } : { display: 'none' }}
            onMouseLeave={hideCategoryOverview}
        >
            <div className={styles.sub_categories}>
                <h5>CATEGORIES</h5>
                <ul className={styles.sub_categories_list}>
                   {category !== null ? displaySubCategories() : ''}
                </ul>
            </div>
            <div className={styles.top_brands}>
                <h5>TOP BRANDS</h5>
                <div className={styles.imgs_container}>
                    {category !== null ? displayTopBrands() : ''}
               </div>
            </div>
            <div className={styles.photos}>
                <div className={styles.photos_container}>
                    {displayPhotos()}
               </div>
            </div>
        </div>
    );
};

export default CategoryOverview;
