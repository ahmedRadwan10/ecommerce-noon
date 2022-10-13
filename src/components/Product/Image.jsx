import React from 'react';
import { useState } from 'react';

const Image = ({ imgSrc }) => {
    const [imgIsOk, setIsOk] = useState(true);

    const handleError = () => {
        setIsOk(false);
    }

    return (
        <img onError={handleError} src={imgIsOk ? imgSrc : "/data/assets/svg/noon.svg"} alt="" />
    );
}

export default Image;