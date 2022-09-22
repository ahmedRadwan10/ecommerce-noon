import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedCategory } from "../../redux/slices/categorySlice";
import styles from "./CategoryOverview.module.css";

const CategoryOverview = ({ categories }) => {
    const selectedCategory = useSelector(state => state.categories.selectedCategory.payload);
    const [visible, setVisibile] = useState(false);


    const displaySubCategories = () => {
        if (visible && selectedCategory[0].id <= 7) return categories.map(
            (cat) => {
                if (cat.id === selectedCategory[0].id) {
                    return cat.subCategories.map((sub) =>
                        <li key={sub}>{sub}</li>
                    )
                }
            }
        );
    }

    const displayTopBrands = () => {
        if (visible && selectedCategory[0].id <= 7) return categories.map(
            (cat) => {
                if (cat.id === selectedCategory[0].id) {
                    return cat.topBrands.map((brandURL) =>
                        <img key={brandURL} src={brandURL} alt="Brand" />
                    )
                }
            }
        );
    }

    const displayPhotos = () => {
        if (visible && selectedCategory[0].id <= 7) return (
            <>
                <img src={selectedCategory[0].photos[0]} alt="Category" />
                <img src={selectedCategory[0].photos[1]} alt="Category" />
            </>
        );
    }

    useEffect(() => {
        if (selectedCategory && selectedCategory[0].id <= 7) setVisibile(true);
        else setVisibile(false)
    }, [selectedCategory])

    return (
        <div className={styles.category_overview_container}
            style={ visible ? { display: 'flex' } :  { display: 'none' }}
        >
            <div className={styles.category_overview}>
                <div className={styles.sub_categories}>
                    <h5>CATEGORIES</h5>
                    <ul className={styles.sub_categories_list}>
                    { displaySubCategories() }
                    </ul>
                </div>
                <div className={styles.top_brands}>
                    <h5>TOP BRANDS</h5>
                    <div className={styles.imgs_container}>
                        { displayTopBrands() }
                    </div>
                </div>
                <div className={styles.photos}>
                    <div className={styles.photos_container}>
                        { displayPhotos() }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryOverview;
