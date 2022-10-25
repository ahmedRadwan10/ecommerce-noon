import React, { useRef } from "react";
import { Link } from "react-router-dom";

const RightHeader = ({ styles }) => {
    const categoriesIcon = useRef();
    return (
        <>
            <div className={styles.right_header}>
                <h3 className={styles.language}>العربية</h3>
                <span className={styles.divider}>|</span>
                <div className={styles.flex_container}>
                    <h3 className={styles.icon_text}>Sign In</h3>
                    <i className="fas fa-user"></i>
                </div>
                <span className={styles.divider}>|</span>
                <div className={styles.flex_container}>
                    <h3 className={styles.icon_text}>Cart</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <span className={styles.divider}>|</span>
                <div ref={categoriesIcon} className={styles.flex_container}>
                    <h3 className={styles.icon_text}>Categories</h3>
                    <i className="fas fa-border-all"></i>
                </div>
                <span className={styles.divider}>|</span>
                <Link to="/">
                    <div className={styles.flex_container}>
                        <h3 className={styles.icon_text}>Home</h3>
                        <i className="fas fa-home-alt"></i>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default RightHeader;
