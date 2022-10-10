import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeSelectedCategory } from "../../redux/slices/categorySlice";
import styles from "./CategoryOverview.module.css";

const CategoryOverview = () => {
    const selectedCategory = useSelector(({ categoryState }) => categoryState.selectedCategory);
    const dispatch = useDispatch();
    const categoryOverviewElement = useRef();


    const displaySubCategories = () => {
        if (selectedCategory.id) {
            let subCategoriesObj = selectedCategory.__collections__.subCategories;
            return Object.keys(subCategoriesObj).map(subKey => <Link to={`/${subCategoriesObj[subKey].title}`} key={subKey}><li>{subCategoriesObj[subKey].title}</li></Link>);
        } 
    }

    const displayTopBrands = () => {
        if (selectedCategory.id) {
            let brandsObj = selectedCategory.__collections__.brands;
            return Object.keys(brandsObj).map(brandKey => <img key={brandKey} src={brandsObj[brandKey].img} alt={brandsObj[brandKey].name} />);
        }
    }

    const displayPhotos = () => {
        if (selectedCategory.photos) return (
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
            dispatch(removeSelectedCategory());
        }
    }

    useEffect(() => {
       
    }, [selectedCategory])

    return (
        <div className={styles.category_overview_container}
            style={selectedCategory.id ? { display: 'flex' } : { display: 'none' }}
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
