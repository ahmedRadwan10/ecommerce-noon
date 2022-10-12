import React from 'react';
import Image from './Image';
import styles from "./Product.module.css";

const MoreData = ({ product }) => {
    return (
        <div className={styles.more_data_container}>
            <div className={styles.hassle_free}>
                <Image imgSrc={"https://z.nooncdn.com/s/app/com/noon/icons/free_returns.svg"} imgAlt={"Free Returns"} />
                <div>
                    <p>Enjoy hassle free returns with this offer.</p>
                    <span>Learn More</span>
                </div>
            </div>
            <div className={styles.seller_container}>
                <Image imgSrc={"https://z.nooncdn.com/s/app/com/noon/icons/seller.svg"} imgAlt={"Seller"} />
                <div>
                    <p>Sold by <strong>{product.sold_by}</strong></p>
                    <div className={styles.seller_info}>
                        <div className={styles.rating_container}>
                            {product.rating}
                            <i className="fa-solid fa-star fa-sm"></i>
                        </div>
                        { product.seller_positive_ratings ? <div>{product.seller_positive_ratings} Positive Ratings</div> : "" }
                    </div>
                </div>
            </div>
            <div className={styles.seller_achievements}>
                <div className={styles.achievement}>
                    <Image imgSrc={"https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"} imgAlt={"Low Return"} />
                    <h3>Low Return Seller</h3>
                </div>
                <div className={styles.achievement}>
                    <Image imgSrc={"https://z.nooncdn.com/nr/seller_badges/badge_great_recent_rating.png"} imgAlt={"Greet Recent Rating"} />
                    <h3>Greet Recent Rating</h3>
                </div>
              { product.product_as_described ? <div className={styles.as_described}>
                    <span>{product.product_as_described}</span>
                    <p>Product as Described</p>
                </div> : "" }
            </div>
        </div>
    );
}

export default MoreData;