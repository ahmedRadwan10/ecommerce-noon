import { CircularProgress } from '@mui/material';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocationAddress } from '../../redux/slices/locationSlice';
import GoogleMap from './GoogleMap';
import styles from './Map.module.css';

const Map = ({ isShown, hideMap }) => {
  const lat = useSelector(({ locationState }) => locationState.lat);
  const lng = useSelector(({ locationState }) => locationState.lng);
  const addressChanged = useSelector(({ locationState }) => locationState.addressChanged);
  const dispatch = useDispatch();
 
  const getReverseGeocodingData = async () => {
    const response = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/Geocodeserver/reverseGeocode?f=pjson&featureTypes=&location=${lat},${lng}`);
    const data = await response.json();
    dispatch(updateLocationAddress(data.address.Match_addr));
  }
  
  const confirmLocation = () => {
    getReverseGeocodingData();
    hideMap();
  }

  if (isShown) return ReactDOM.createPortal(
    <div className={styles.map_modal_overlay}>
      <div className={styles.map_modal_container}>
        <div className={styles.map_header}>
          <h3>Add New Address</h3>
          <div onClick={hideMap}>
            <i className="fa-solid fa-xmark fa-xl"></i>
          </div>
        </div>
        <div className={styles.map}>
          <GoogleMap
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={styles.confirm_container}>
          <button onClick={confirmLocation} disabled={!addressChanged}>
            Confirm Location
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("map")
  )
}

export default Map;