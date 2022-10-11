import React, { useRef } from 'react';
import { useEffect } from 'react';
import styles from "./ProductsOverview.module.css";

const ProductsOverview = ({ data }) => {
    const productsContainer = useRef();

    const renderProductOldPrice = (product) => {
        return (
            <div className={styles.old_price_container}>
                    EGP
                    <span>{product.old_price.toFixed(2)}</span>
                    <span>{Math.floor(100 - (product.new_price / product.old_price) * 100)}% OFF</span>
                </div>
        );
    }

    const renderProductRating = (product) => {
        return (
            <div>
                <i className="fa-solid fa-star fa-sm"></i>
                <span>{product.rating}</span>
                <span>({parseInt(product.reviews_number)})</span>
            </div>
        );
    }

    const renderProducts = () => {
        if (data.products) return data.products.map(product => {
            if (product["img-src"]) {
                return <div key={product["web-scraper-order"]} className={styles.product_container}>
                        <img src={product["img-src"].replace(/tr:n-t_80/i, "tr:n-t_240")} alt={product.title} />
                        <p title={product.title}>{product.title}</p>
                        <div className={styles.new_price_container}>
                            EGP
                            <span>{product.new_price.toFixed(2)}</span>
                        </div>
                        {product.old_price ? renderProductOldPrice(product) : ""}
                        <div className={styles.product_footer}>
                            <img src="https://f.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="Express" />
                            {product.reviews_number ? renderProductRating(product) : ""}
                        </div>
                </div>
           } 
        });
    }

    const scrollProductsToLeft = () => {
        productsContainer.current.scrollLeft -= 300;
    }

    const scrollProductsToRight = () => {
        productsContainer.current.scrollLeft += 300;
    }

    if (data) return (
        <div className={styles.main_container}>
            <button className={styles.scroll_btn} onClick={scrollProductsToLeft}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className={styles.scroll_btn} onClick={scrollProductsToRight}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className={styles.header}>
                <h2>{data.title}</h2>
                <button>SHOP NOW</button>
            </div>
            <div ref={productsContainer} className={styles.products_container}>
                { renderProducts() }
            </div>
        </div>
    );
}

export default ProductsOverview;