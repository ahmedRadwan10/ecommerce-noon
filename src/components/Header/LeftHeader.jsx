import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetAddressChanged } from "../../redux/slices/locationSlice";
import Map from "./Map";

const LeftHeader = ({ styles }) => {
    const [mapIsShown, setMapIsShown] = useState(false);
    const currentLocation = useSelector(({ locationState }) => locationState.address);
    const addressChanged = useSelector(({ locationState }) => locationState.addressChanged);
    const dispatch = useDispatch();

    const showMap = () => {
        setMapIsShown(true);
    }

    const hideMap = () => {
        setMapIsShown(false);
        if (addressChanged) dispatch(resetAddressChanged());
    }

    return (
        <>
            <div className={styles.left_header}>
                <Link to="/"><img className={styles.logo} src="/data/assets/svg/noon-logo-en.svg" alt="Logo" /></Link>
                <div className={styles.location_container}
                     onClick={showMap}
                >
                    <img src="/data/assets/svg/eg.svg" alt="Country Flag" />
                    <div className={styles.delivery_container}>
                        <div className={styles.text_container }>
                            <h3 className={styles.deliver_text}>Deliver to</h3>
                            <i className="fa-solid fa-chevron-down"></i>
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
