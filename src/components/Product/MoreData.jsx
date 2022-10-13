import React from 'react';
import Image from './Image';
import styles from "./Product.module.css";

const MoreData = ({ product }) => {

    const renderHassleFree = () => {
           return <div className={styles.hassle_free}>
                <Image imgSrc={"/data/assets/svg/free_returns.svg"} imgAlt={"Free Returns"} />
                <div>
                    <p>Enjoy hassle free returns with this offer.</p>
                    <span>Learn More</span>
                </div>
            </div>
    }

    const renderSellerInfo = () => {
           return  <div className={styles.seller_container}>
                        <Image imgSrc={"/data/assets/svg/seller.svg"} imgAlt={"Seller"} />
                        <div>
                            <p>Sold by <strong>{product.sold_by}</strong></p>
                            <div className={styles.seller_info}>
                                <div className={styles.rating_container}>
                                    {product.rating || "4.5"}
                                    <i className="fa-solid fa-star fa-sm"></i>
                                </div>
                                { product.seller_positive_ratings ? <div>{product.seller_positive_ratings} Positive Ratings</div> : "" }
                            </div>
                        </div>
                    </div>
    }

    const renderSellerAchievements = () => {
           return  <div className={styles.seller_achievements}>
                        <div className={styles.achievement}>
                            <Image imgSrc={"/data/assets/png/badge_low_returns_seller.png"} imgAlt={"Low Return"} />
                            <h3>Low Return Seller</h3>
                        </div>
                        <div className={styles.achievement}>
                            <Image imgSrc={"/data/assets/png/badge_great_recent_rating.png"} imgAlt={"Greet Recent Rating"} />
                            <h3>Greet Recent Rating</h3>
                        </div>
                        { product.product_as_described ? <div className={styles.as_described}>
                            <span>{product.product_as_described}</span>
                            <p>Product as Described</p>
                        </div> : "" }
                    </div>
    }

    const renderFasilities = () => {
        return  <div className={styles.facilities}>
                    <div className={styles.facility}>
                        <Image imgSrc={"/data/assets/svg/free_returns_usp.svg"} />
                        <div>
                            <h5>FREE RETURNS</h5>
                            <p>Get free returns on eligible items</p>
                        </div>
                    </div>
                    <div className={styles.facility}>
                        <Image imgSrc={"/data/assets/svg/trusted_shipping_usp_v2.svg"} />
                        <div>
                            <h5>TRUSTED SHIPPING</h5>
                            <p>Free shipping when you spend EGP 200 and above on express items</p>
                        </div>
                    </div>
                    <div className={styles.facility}>
                        <Image imgSrc={"/data/assets/svg/secure_usp.svg"} />
                        <div>
                            <h5>SECURE SHOPPING</h5>
                            <p>Your data is always protected</p>
                        </div>
                    </div>
                </div>
    }

    return (
        <div className={styles.more_data_container}>
            { renderHassleFree() }
            { renderSellerInfo() }
            { renderSellerAchievements() }
            { renderFasilities() }
        </div>
    );
}

export default MoreData;