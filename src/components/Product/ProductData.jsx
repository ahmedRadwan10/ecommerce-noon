import React from 'react';
import { useEffect } from 'react';
import styles from "./Product.module.css";

const ProductData = ({ product }) => {

    return (
        <div className={styles.all_data_container}>
            <h4>{product.brand_name}</h4>
            <h3>{product.title}</h3>
            <div className={styles.flex}>
                <p>{product.model_number}</p>
                <div className={styles.rating_container}>{product.rating}<i className="fa-solid fa-star fa-sm"></i></div>
                <p className={styles.reviews}>{product.reviews_number}</p>
            </div>
           { product.old_price ? <div className={styles.flex}>
                <span>Was:</span>
                <span>{product.old_price}</span>
            </div> : ""}
            <div className={styles.flex}>
                <span>Now:</span>
                <span>EGP {parseInt(product.new_price.slice(4)).toFixed(2)} Inclusive of VAT</span>
            </div>
            <div>
               { product.old_price ? <div className={styles.flex}>
                    <span>Saving:</span>
                    <span>EGP{(parseInt(product.new_price.slice(4)) - parseInt(product.old_price.slice(4))).toFixed(2)}</span>
                    <div className={styles.sale_container}>
                        {Math.floor(100 - (parseInt(product.new_price.slice(4)) / parseInt(product.old_price.slice(4))) * 100)}% OFF
                    </div>
                </div> : ""}
            </div>
        </div>
    );
}

export default ProductData;