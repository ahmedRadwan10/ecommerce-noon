import React, { useEffect, useState } from "react";
import styles from "./CategoryOverview.module.css";

const CategoryOverview = ({ categories, category }) => {
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
                        <img key={brandURL} src={`../../../${brandURL}`} alt="Brand" />
                    )
                }
            }
        );
    }

    useEffect(() => {
        if (category !== null && category.id <= 7) setVisibility(true);
        else setVisibility(false);
    }, [category])

    return (
        <div className={styles.category_overview}
            style={visible ? { display: 'block' } : { display: 'none' }}
        >
            <div className={styles.sub_categories}>
                <h5>CATEGORIES</h5>
                <ul className={styles.sub_categories_list}>
                   {category !== null ? displaySubCategories() : ''}
                </ul>
            </div>
            <div className={styles.top_brands}>
                {category !== null ? displayTopBrands() : ''}
            </div>
        </div>
    );
};

export default CategoryOverview;
