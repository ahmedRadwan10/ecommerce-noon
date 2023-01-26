import React, { useEffect, useRef, useState } from "react";
import styles from "./ImageSlider.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const ImageSlider = ({ slider }) => {

    const swiper = useSwiper();

    useEffect(() => {
        console.log(swiper);
    }, [swiper])

    if (slider) return (
        <div className={styles.main_container}>
             <Swiper
                spaceBetween={1000}
                slidesPerView={slider.sliderImgs.length}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                { slider.sliderImgs.map(img => 
                        <SwiperSlide key={img}><img src={img} alt="Banner" /></SwiperSlide>
                    ) }
                </Swiper>
            
            { slider.sliderImgs.length > 1 ? <button onClick={() => swiper.slidePrev()}>
                                <i className="fa-solid fa-chevron-left"></i>
                            </button> : "" }
                            
            { slider.sliderImgs.length > 1 ? <button onClick={() => swiper.slideNext()}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button> : "" }
        </div>
    );
}
            

export default ImageSlider;
