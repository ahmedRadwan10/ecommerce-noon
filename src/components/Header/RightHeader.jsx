import React from "react";

const RightHeader = ({ styles }) => {
    return (
        <>
            <div className={styles.right_header}>
                <h3 className={styles.language}>العربية</h3>
                <span className={styles.divider}>|</span>
                <div className={styles.flex_container}>
                    <h3 className={styles.icon_text}>Sign In</h3>
                    <img className={styles.user_icon} src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="User" />
                </div>
                <span className={styles.divider}>|</span>
                <div className={styles.flex_container}>
                    <h3 className={styles.icon_text}>Cart</h3>
                    <img className={styles.cart_icon} src="https://f.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="Cart" />
                </div>
            </div>
        </>
    );
};

export default RightHeader;
