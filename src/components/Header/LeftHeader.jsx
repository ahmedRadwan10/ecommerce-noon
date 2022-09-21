import React from "react";

const LeftHeader = ({ styles }) => {
    return (
        <>
            <div className={styles.left_header}>
                <img className={styles.logo} src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="Logo" />
                <div className={styles.location_container}>
                    <img src="https://f.nooncdn.com/s/app/com/common/images/flags/eg.svg" alt="Country Flag" />
                    <div className={styles.delivery_container}>
                        <div className={styles.text_container }>
                            <h3 className={styles.deliver_text}>Deliver to</h3>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" alt="drop-down-arrow" />
                        </div>
                        <h3 className={styles.location_text}>Cairo</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftHeader;
