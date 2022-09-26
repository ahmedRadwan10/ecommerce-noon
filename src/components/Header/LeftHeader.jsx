import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Map from "./Map";

const LeftHeader = ({ styles }) => {
    const [mapIsShown, setMapIsShown] = useState(false);
    const currentLocation = useSelector(({ locationState }) => locationState.currentLocation.payload);

    const showMap = () => {
        setMapIsShown(true);
    }

    const hideMap = () => {
        setMapIsShown(false);
    }

    return (
        <>
            <div className={styles.left_header}>
                <img className={styles.logo} src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="Logo" />
                <div className={styles.location_container}
                     onClick={showMap}
                >
                    <img src="https://f.nooncdn.com/s/app/com/common/images/flags/eg.svg" alt="Country Flag" />
                    <div className={styles.delivery_container}>
                        <div className={styles.text_container }>
                            <h3 className={styles.deliver_text}>Deliver to</h3>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" alt="drop-down-arrow" />
                        </div>
                        <h3 className={styles.location_text}>{currentLocation}</h3>
                    </div>
                </div>
            </div>
            <Map isShown={mapIsShown} hideMap={hideMap} />
        </>
    );
};

export default LeftHeader;
