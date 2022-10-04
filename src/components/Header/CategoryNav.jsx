import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../apis/firebase";
import { removeSelectedCategory, selectCategory } from "../../redux/slices/categorySlice";
import CategoryOverview from "./CategoryOverview";

const CategoryNav = ({ styles }) => {
    const categories = useSelector(({ categoryState }) => categoryState.allCategories);
    const dispatch = useDispatch();
    const categoryList = useRef();

    const scrollListToLeft = () => {
        categoryList.current.scrollLeft -= 150;
    }

    const scrollListToRight = () => {
        categoryList.current.scrollLeft += 150;
    }

    const selectCurrentCategory = (categoryID) => {
        let currentCategory = categories.filter(
            cat => cat.id === categoryID
        );
        dispatch(selectCategory(currentCategory));
    }

    const handleOnMouseLeave = () => {
        let elementsMouseOver = document.querySelectorAll(":hover" )
        let elementsArray = [...elementsMouseOver];
        let currentMouseOverElement = elementsArray.at(-1);

        // if (currentMouseOverElement !== ) {
        //     dispatch(removeSelectedCategory());
        // }

    }
    
    const displayCategories = () => {
        if (categories) return categories.map(
            (category) =>
                <li key={category.id}
                    onMouseOver={() => selectCurrentCategory(category.id)}
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
                <div className={styles.all_categories}>
                    ALL CATEGORIES
                    <img src="https://f.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" alt="Down Arrow" />
                </div>
                <div ref={categoryList} className={styles.list_container}>
                    <button onClick={scrollListToLeft}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIxIiBoZWlnaHQ9IjQwMyIgdmlld0JveD0iMCAwIDIyMSA0MDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InNjLWdKd1RMQyBnSEZJYm8iPjxwYXRoIGQ9Ik0yMTYgMzgzLjg4NUMyMjEuNSAzODkuMzg1IDIxOC41IDM5NS44ODUgMjE2IDM5OC4zODVDMjEzLjUgNDAwLjg4NSAyMDYuNSA0MDQuMzg1IDIwMC41IDM5OC4zODVMMC45OTk5NyAyMTYuMzg1TDIwMC41IDQuMzg1MzRDMjA1LjUgLTAuNjE0NzAzIDIxMiAwLjM4NTM3OSAyMTYgNC4zODUzNUMyMjAgOC4zODUzMSAyMjEuNSAxNy4zODUzIDIxNiAyMi44ODUzTDI5IDIxNi4zODVMMjE2IDM4My44ODVaIiBmaWxsPSJibGFjayIgc3Ryb2tlPSJub25lIi8+PC9zdmc+" alt="scroll left" />
                    </button>
                    <ul className={styles.category_list}>
                        { displayCategories() }
                    </ul>
                    <button onClick={scrollListToRight}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIwIiBoZWlnaHQ9IjQwMyIgdmlld0JveD0iMCAwIDIyMCA0MDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InNjLWlXYWpyWSB5TnhIeiI+PHBhdGggZD0iTTQuMDg0MTkgMTguODEzQy0xLjQxNTc5IDEzLjMxMyAxLjU4NDE5IDYuODEyODggNC4wODQxOSA0LjMxMjg4QzYuNTg0MTkgMS44MTI4OSAxMy41ODQyIC0xLjY4NzA3IDE5LjU4NDIgNC4zMTI5MUwyMTkuMDg0IDE4Ni4zMTNMMTkuNTg0MiAzOTguMzEzQzE0LjU4NDIgNDAzLjMxMyA4LjA4NDE2IDQwMi4zMTMgNC4wODQxOSAzOTguMzEzQzAuMDg0MjI2NCAzOTQuMzEzIC0xLjQxNTg0IDM4NS4zMTMgNC4wODQxOSAzNzkuODEzTDE5MS4wODQgMTg2LjMxM0w0LjA4NDE5IDE4LjgxM1oiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIi8+PC9zdmc+" alt="scroll right" />
                    </button>
                </div>
            </div>
            <CategoryOverview />
        </>
    );
};

export default CategoryNav;
