import React, { useEffect, useRef, useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ sliderImgs, headerImg }) => {
    const [sliderIsAutoplay, setAutoplay] = useState(true);
    const [currentPaginationIndex, setIndex] = useState(0);
    const [sliderImgsCount, setCount] = useState(0);
    const imgsSliderElement = useRef();
    const paginationElement = useRef();

    const getNumberOfSliderImgs = () => {
        if (sliderImgs) setCount(sliderImgs.length);
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

    const displaySliderImgs = () => {
        if (sliderImgs) return sliderImgs.map(img => <img key={img} src={img} alt="Banner" />);
    }

    const displayHeaderImg = () => {
        if (sliderImgs) return <img src={headerImg} alt="Toggle" />;
    }
    
    const displayPagination = () => {
        if (sliderImgs) return sliderImgs.map(img => <span className={styles.pagination_span} key={img}></span>);
    }

    const updatePagination = (index = 0) => {
        let spansArr = [...paginationElement.current.children];
        if (sliderImgs) {
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
        }, 3000)
    }

    useEffect(() => {
        if (sliderIsAutoplay && sliderImgsCount) playSlider();
        return () => clearInterval(sliderInterval);
    }, [sliderIsAutoplay, sliderImgsCount, currentPaginationIndex]);
    
    useEffect(() => {
        getNumberOfSliderImgs();
        displayPagination();
        updatePagination();
    }, [sliderImgs]);

    return (
        <div className={styles.main_container}>
            <div className={styles.header_img_container}>
                { displayHeaderImg() }
            </div>
            <div className={styles.imgs_slider_container}>
                <button onClick={scrollImgsToLeft}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIxIiBoZWlnaHQ9IjQwMyIgdmlld0JveD0iMCAwIDIyMSA0MDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InNjLWdKd1RMQyBnSEZJYm8iPjxwYXRoIGQ9Ik0yMTYgMzgzLjg4NUMyMjEuNSAzODkuMzg1IDIxOC41IDM5NS44ODUgMjE2IDM5OC4zODVDMjEzLjUgNDAwLjg4NSAyMDYuNSA0MDQuMzg1IDIwMC41IDM5OC4zODVMMC45OTk5NyAyMTYuMzg1TDIwMC41IDQuMzg1MzRDMjA1LjUgLTAuNjE0NzAzIDIxMiAwLjM4NTM3OSAyMTYgNC4zODUzNUMyMjAgOC4zODUzMSAyMjEuNSAxNy4zODUzIDIxNiAyMi44ODUzTDI5IDIxNi4zODVMMjE2IDM4My44ODVaIiBmaWxsPSJibGFjayIgc3Ryb2tlPSJub25lIi8+PC9zdmc+" alt="scroll left" />
                </button>
                <div ref={imgsSliderElement} className={styles.imgs_slider}>
                    { displaySliderImgs() }
                </div>
                <button onClick={scrollImgsToRight}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIwIiBoZWlnaHQ9IjQwMyIgdmlld0JveD0iMCAwIDIyMCA0MDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InNjLWlXYWpyWSB5TnhIeiI+PHBhdGggZD0iTTQuMDg0MTkgMTguODEzQy0xLjQxNTc5IDEzLjMxMyAxLjU4NDE5IDYuODEyODggNC4wODQxOSA0LjMxMjg4QzYuNTg0MTkgMS44MTI4OSAxMy41ODQyIC0xLjY4NzA3IDE5LjU4NDIgNC4zMTI5MUwyMTkuMDg0IDE4Ni4zMTNMMTkuNTg0MiAzOTguMzEzQzE0LjU4NDIgNDAzLjMxMyA4LjA4NDE2IDQwMi4zMTMgNC4wODQxOSAzOTguMzEzQzAuMDg0MjI2NCAzOTQuMzEzIC0xLjQxNTg0IDM4NS4zMTMgNC4wODQxOSAzNzkuODEzTDE5MS4wODQgMTg2LjMxM0w0LjA4NDE5IDE4LjgxM1oiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIi8+PC9zdmc+" alt="scroll right" />
                </button>
                <div ref={paginationElement} className={styles.pagination}>
                    { displayPagination() }
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
