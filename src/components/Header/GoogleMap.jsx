import { useState } from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateLocation } from "../../redux/slices/locationSlice";

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const [markerPosition, setMarkerPosition] = useState({
        lat: 30.033333,
        lng: 31.233334
    });
    const dispatch = useDispatch();

    const handleMapOnClick = (coord) => {
        setMarkerPosition({
            lat: coord.latLng.lat(),
            lng: coord.latLng.lng()
        });
    }

    const getReverseGeocodingData = async () => {
        const response = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/Geocodeserver/reverseGeocode?f=pjson&featureTypes=&location=${markerPosition.lat},${markerPosition.lng}`);
        const data = await response.json();
        dispatch(updateLocation(data.address.Match_addr));
    }

    useEffect(() => {
        getReverseGeocodingData();
    })

    return (
        <>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={markerPosition}
                onClick={handleMapOnClick}
            >
                {props.isMarkerShown && <Marker
                    position={markerPosition} />}
            </GoogleMap>
        </>
    )}
));


export default MyMapComponent;