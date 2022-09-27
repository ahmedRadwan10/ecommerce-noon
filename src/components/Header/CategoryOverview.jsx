import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedCategory } from "../../redux/slices/categorySlice";
import styles from "./CategoryOverview.module.css";

const CategoryOverview = () => {
    const categories = useSelector(({ categoryState }) => categoryState.allCategories);
    const selectedCategory = useSelector(({ categoryState }) => categoryState.selectedCategory);
    const [visible, setVisibile] = useState(false);
    const categoryOverviewElement = useRef();


    const displaySubCategories = () => {
        if (visible && selectedCategory.id <= 7) return categories.map(
            (cat) => {
                if (cat.id === selectedCategory.id) {
                    return cat.subCategories.map((sub) =>
                        <li key={sub}>{sub}</li>
                    )
                }
            }
        );
    }

    const displayTopBrands = () => {
        if (visible && selectedCategory.id <= 7) return categories.map(
            (cat) => {
                if (cat.id === selectedCategory.id) {
                    return cat.topBrands.map((brandURL) =>
                        <img key={brandURL} src={brandURL} alt="Brand" />
                    )
                }
            }
        );
    }

    const displayPhotos = () => {
        if (visible && selectedCategory.id <= 7) return (
            <>
                <img src={selectedCategory.photos[0]} alt="Category" />
                <img src={selectedCategory.photos[1]} alt="Category" />
            </>
        );
    }

    const handleOnMouseLeave = () => {
        let elementsMouseOver = document.querySelectorAll(":hover" )
        let elementsArray = [...elementsMouseOver];
        let currentMouseOverElement = elementsArray.at(-1);

        if (currentMouseOverElement !== categoryOverviewElement.current) {
            setVisibile(false);
        }

    }

    useEffect(() => {
        if (selectedCategory && selectedCategory.id <= 7) setVisibile(true);
        else setVisibile(false)
    }, [selectedCategory])

    return (
        <div className={styles.category_overview_container}
            style={visible ? { display: 'flex' } : { display: 'none' }}
        >
            <div ref={categoryOverviewElement}
                className={styles.category_overview}
                onMouseLeave={handleOnMouseLeave}
            >
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
