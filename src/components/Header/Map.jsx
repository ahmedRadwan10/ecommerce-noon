import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap';
import styles from './Map.module.css';

const Map = ({ isShown, hideMap }) => {
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
          <button onClick={hideMap}>Confirm Location</button>
        </div>
      </div>
    </div>,
    document.getElementById("map")
  )
}

export default Map;