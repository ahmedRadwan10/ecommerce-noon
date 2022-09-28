import React, { useRef } from 'react';
import styles from "./ProductsOverview.module.css";

const ProductsOverview = ({ title, products }) => {
    const productsContainer = useRef();

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

    const scrollProductsToLeft = () => {
        productsContainer.current.scrollLeft -= 300;
    }

    const scrollProductsToRight = () => {
        productsContainer.current.scrollLeft += 300;
    }

    if (products) return (
        <div className={styles.main_container}>
            <button className={styles.scroll_btn} onClick={scrollProductsToLeft}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className={styles.scroll_btn} onClick={scrollProductsToRight}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button>SHOP NOW</button>
            </div>
            <div ref={productsContainer} className={styles.products_container}>
                { displayProducts() }
            </div>
        </div>
    );
}

export default ProductsOverview;