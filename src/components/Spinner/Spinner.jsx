import React from 'react';

const loaderStyles = {
    width: "150px",
    position: "relative",
    top: "50%", 
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: "0.5"
}

const containerStyles = {
    position: "absolute",
    top: "110px", 
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "var(--bg03)"
}

const Spinner = () => {
    return (
        <div style={containerStyles}>
          <img style={loaderStyles} src="/data/assets/gif/noon-loader.gif" alt="Loader" />
        </div>
    );
}

export default Spinner;