import { useState } from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAddressChanged, updateLocationLatlng } from "../../redux/slices/locationSlice";

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const lat = useSelector(({ locationState }) => locationState.lat);
    const lng = useSelector(({ locationState }) => locationState.lng);
    const addressChanged = useSelector(({ locationState }) => locationState.addressChanged);
    const dispatch = useDispatch();

    const handleMapOnClick = (coord) => {
        dispatch(updateLocationLatlng({
            lat: coord.latLng.lat(),
            lng: coord.latLng.lng(),
        }));
        if (!addressChanged) dispatch(confirmAddressChanged());
    }

    return (
        <>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{lat, lng}}
                onClick={handleMapOnClick}
            >
                {props.isMarkerShown && <Marker
                    position={{lat, lng}} />}
            </GoogleMap>
        </>
    )}
));


export default MyMapComponent;