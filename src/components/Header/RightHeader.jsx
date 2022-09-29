import React from "react";

const RightHeader = ({ styles }) => {
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
            </div>
        </>
    );
};

export default RightHeader;
