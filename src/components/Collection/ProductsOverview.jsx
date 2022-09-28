import React from 'react';
import { useEffect } from 'react';
import styles from "./ProductsOverview.module.css";

const ProductsOverview = ({ title, products }) => {

    const displayProducts = () => {
        return products.map(product => 
            <div key={product.id} className={styles.product_container}>
                <img src={product.img} alt="Product" />
                <p title={product.title}>{product.title}</p>
                <div className={styles.new_price_container}>
                    EGP
                    <span>{product.newPrice.toFixed(2)}</span>
                </div>
                { product.oldPrice ? <div className={styles.old_price_container}>
                    EGP
                    <span>{product.oldPrice.toFixed(2)}</span>
                    <span>{Math.floor(100 - (product.newPrice / product.oldPrice) * 100)}% OFF</span>
                </div> : ""}
                <div className={styles.product_footer}>
                    <img src="https://f.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="Express" />
                    {product.reviewsNumber ? <div>
                        <i className="fa-solid fa-star fa-sm"></i>
                        <span>{product.rating}</span>
                        <span>({product.reviewsNumber})</span>
                    </div>: ""}
                </div>
            </div>
        );
    }

    if (products) return (
        <div className={styles.main_container}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button>SHOP NOW</button>
            </div>
            <div className={styles.products_container}>
                { displayProducts() }
            </div>
        </div>
    );
}

export default ProductsOverview;