import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../apis/categories";
import { removeSelectedCategory, selectCategory } from "../../redux/slices/categorySlice";
import CategoryOverview from "./CategoryOverview";

const CategoryNav = ({ styles }) => {
    const categories = useSelector(({ categoryState }) => categoryState.categories);
    const dispatch = useDispatch();
    const categoryList = useRef();
    const navigate = useNavigate();

    window.onscroll = () => {
        dispatch(removeSelectedCategory());
    }
    
    const selectCurrentCategory = (categoryID, categoryOrder) => {
        if (categoryOrder <= 5) {
            categories.forEach((cat) => {
                if (cat.id === categoryID) {
                    dispatch(selectCategory(cat));
                }
            });
        }
    }

    const handleOnMouseLeave = () => {
        let elementsMouseOver = document.querySelectorAll(":hover" )
        let elementsArray = [...elementsMouseOver];
        let currentMouseOverElement = elementsArray.at(-1);
        let categoryOverviewElement = document.querySelector("#category-overview-element");

        if (currentMouseOverElement !== categoryOverviewElement) {
            dispatch(removeSelectedCategory());
        }
    }
    
    const renderCategories = () => {
        if (categories) return categories.map(
            (category) =>
                <li 
                    key={category.id}
                    onClick={() => navigate(`${category.title}`)}
                    onMouseOver={() => selectCurrentCategory(category.id, category.order)}
                    onMouseLeave={handleOnMouseLeave}
                    >
                       {category.title.toUpperCase()}
                    </li>
        );
    }

    useEffect(() => {
        getCategories(dispatch);
    }, [dispatch])

    return (
        <>
            <div className={styles.category_nav}>
                <div ref={categoryList} className={styles.list_container}>
                    <ul className={styles.category_list}>
                        { renderCategories() }
                    </ul>
                </div>
            </div>
            <CategoryOverview />
        </>
    );
};

export default CategoryNav;
