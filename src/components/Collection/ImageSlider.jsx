import React, { useEffect, useRef, useState } from "react";
import styles from "./ImageSlider.module.css";
import Image from "../Product/Image";

const ImageSlider = ({ slider }) => {
    const [sliderIsAutoplay, setAutoplay] = useState(true);
    const [sliderIsLoading, setSliderIsLoading] = useState(true);
    const [currentPaginationIndex, setIndex] = useState(0);
    const [sliderImgsCount, setCount] = useState(0);
    const imgsSliderElement = useRef();
    const paginationElement = useRef();
    
    const getNumberOfSliderImgs = () => {
        if (slider) setCount(slider.sliderImgs.length);
    }
    
    const scrollImgsToLeft = () => {
        if (sliderIsAutoplay) setAutoplay(false);
        let imgSliderWidth = imgsSliderElement.current.offsetWidth;
        if (currentPaginationIndex === 0) {
            imgsSliderElement.current.scrollLeft = imgSliderWidth * (sliderImgsCount);
            setIndex(sliderImgsCount - 1);
        }
        else {
            imgsSliderElement.current.scrollLeft -= imgSliderWidth;
            setIndex(prev => prev - 1);
        }
        updatePagination(currentPaginationIndex === 0 ? sliderImgsCount - 1 : currentPaginationIndex - 1);
    }
    
    const scrollImgsToRight = () => {
        if (sliderIsAutoplay) setAutoplay(false);
        let imgSliderWidth = imgsSliderElement.current.offsetWidth;
        if (currentPaginationIndex === sliderImgsCount - 1) {
            imgsSliderElement.current.scrollLeft = 0;
            setIndex(0);
        }
        else {
            imgsSliderElement.current.scrollLeft += imgSliderWidth;
            setIndex(prev => prev + 1);
        }
        updatePagination(currentPaginationIndex + 1);
    }

    const renderSliderImgs = () => {
        if (slider.sliderImgs) return slider.sliderImgs.map(img => <Image key={img} imgSrc={img} />);
    }

    const renderHeaderImg = () => {
        if (slider.headerImg) return <img src={slider.headerImg} alt="Toggle" />;
    }
    
    const renderPagination = () => {
        if (slider.sliderImgs) return slider.sliderImgs.map(img => <span className={styles.pagination_span} key={img}></span>);
    }

    const updatePagination = (index = 0) => {
        let spansArr = [...paginationElement.current.children];
        if (slider) {
            spansArr.forEach((span) => {
                span.style.backgroundColor = "var(--bg03)";
            });
            paginationElement.current.children[index === sliderImgsCount ? 0 : index ].style.backgroundColor = "var(--yellow)";
        }
    }

    const autoscrollImgs = () => {
        let imgSliderWidth = imgsSliderElement.current.offsetWidth;
        if (currentPaginationIndex === sliderImgsCount - 1) {
            imgsSliderElement.current.scrollLeft = 0;
            setIndex(0);
        }
        else {
            imgsSliderElement.current.scrollLeft += imgSliderWidth;
            setIndex(prev => prev + 1);
        }
        updatePagination(currentPaginationIndex + 1);
    }

    let sliderInterval;
    const playSlider = () => {
        sliderInterval = setInterval(() => {
            autoscrollImgs();
        }, 5000)
    }

    useEffect(() => {
        setTimeout(() => {
            setSliderIsLoading(false);
        }, 2000)
    }, [])

    useEffect(() => {
        if (!sliderIsLoading && sliderIsAutoplay && sliderImgsCount > 1) playSlider();
        return () => clearInterval(sliderInterval);
    }, [sliderIsAutoplay, sliderImgsCount, currentPaginationIndex, sliderIsLoading]);
    
    useEffect(() => {
        getNumberOfSliderImgs();
    }, [slider]);

    if (slider) return (
        <div className={styles.main_container}>
            <div className={styles.header_img_container}>
                { slider.headerImg ? renderHeaderImg() : "" }
            </div>
            <div className={sliderIsLoading ? styles.imgs_slider_container_skeleton : styles.imgs_slider_container}>
                { !sliderIsLoading ?
                    (
                        <>
                            { sliderImgsCount > 1 ? <button onClick={scrollImgsToLeft}>
                                <i className="fa-solid fa-chevron-left"></i>
                            </button> : "" }
                            <div ref={imgsSliderElement} className={styles.imgs_slider}>
                                { renderSliderImgs() }
                            </div>
                            { sliderImgsCount > 1 ? <button onClick={scrollImgsToRight}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button> : "" }
                        </>
                    )
                : "" }
                <div ref={paginationElement} className={styles.pagination}>
                    { renderPagination() }
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
