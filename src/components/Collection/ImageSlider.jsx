import React, { useEffect, useRef, useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
    const imgsSlider = useRef();
    const pagination = useRef();
    const [sliderImgsCount, setCount] = useState(0);
    
    const scrollImgsToLeft = () => {
        imgsSlider.current.scrollLeft -= imgsSlider.current.offsetWidth;
    }

    const scrollImgsToRight = () => {
        imgsSlider.current.scrollLeft += imgsSlider.current.offsetWidth;
    }
    
    // const displayPagination = () => {
    //     let paginationElements = ;
    //     for (let i = 1; i <= sliderImgsCount; i++) {
    //         paginationElements += (<span></span>);
    //     }
    //     return paginationElements;
    // }

    useEffect(() => {
        setCount(imgsSlider.current.children.length);
    }, [imgsSlider]);

    return (
        <div className={styles.main_container}>
            <div className={styles.header_img_container}>
                <img src="https://f.nooncdn.com/cms/pages/20220915/db40b276b580ce6c408b1a1b90dec594/en_dk_eg-toggle-01.png" alt="Toggle" />
            </div>
            <div className={styles.imgs_slider_container}>
                <button onClick={scrollImgsToLeft}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIxIiBoZWlnaHQ9IjQwMyIgdmlld0JveD0iMCAwIDIyMSA0MDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InNjLWdKd1RMQyBnSEZJYm8iPjxwYXRoIGQ9Ik0yMTYgMzgzLjg4NUMyMjEuNSAzODkuMzg1IDIxOC41IDM5NS44ODUgMjE2IDM5OC4zODVDMjEzLjUgNDAwLjg4NSAyMDYuNSA0MDQuMzg1IDIwMC41IDM5OC4zODVMMC45OTk5NyAyMTYuMzg1TDIwMC41IDQuMzg1MzRDMjA1LjUgLTAuNjE0NzAzIDIxMiAwLjM4NTM3OSAyMTYgNC4zODUzNUMyMjAgOC4zODUzMSAyMjEuNSAxNy4zODUzIDIxNiAyMi44ODUzTDI5IDIxNi4zODVMMjE2IDM4My44ODVaIiBmaWxsPSJibGFjayIgc3Ryb2tlPSJub25lIi8+PC9zdmc+" alt="scroll left" />
                </button>
                <div  ref={imgsSlider} className={styles.imgs_slider}>
                    <img src="https://f.nooncdn.com/cms/pages/20220920/60c6d66b9b79b8674453b3231c75428a/en_dk_eg-banner-01.png" alt="Banner" />
                    <img src="https://f.nooncdn.com/cms/pages/20220918/bb6848e7e20efc8944920c3019f8a890/en_dk_eg-hero-01.gif" alt="Banner" />
                    <img src="https://f.nooncdn.com/cms/pages/20220921/16d6544be8236f2672f7eebc097fe28b/en_dk_eg-hero-banner-01.png" alt="Banner" />
                    <img src="https://f.nooncdn.com/cms/pages/20220919/1c6fd9c4afd5c575a8a36d30ab05b265/en_dk_eg-banner-01.png" alt="Banner" />
                    <img src="https://f.nooncdn.com/cms/pages/20220922/f8fea5eef15a809e976d3cbc6d17cb32/en_dk_eg-hero-01.png" alt="Banner" />
                </div>
                <button onClick={scrollImgsToRight}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIwIiBoZWlnaHQ9IjQwMyIgdmlld0JveD0iMCAwIDIyMCA0MDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InNjLWlXYWpyWSB5TnhIeiI+PHBhdGggZD0iTTQuMDg0MTkgMTguODEzQy0xLjQxNTc5IDEzLjMxMyAxLjU4NDE5IDYuODEyODggNC4wODQxOSA0LjMxMjg4QzYuNTg0MTkgMS44MTI4OSAxMy41ODQyIC0xLjY4NzA3IDE5LjU4NDIgNC4zMTI5MUwyMTkuMDg0IDE4Ni4zMTNMMTkuNTg0MiAzOTguMzEzQzE0LjU4NDIgNDAzLjMxMyA4LjA4NDE2IDQwMi4zMTMgNC4wODQxOSAzOTguMzEzQzAuMDg0MjI2NCAzOTQuMzEzIC0xLjQxNTg0IDM4NS4zMTMgNC4wODQxOSAzNzkuODEzTDE5MS4wODQgMTg2LjMxM0w0LjA4NDE5IDE4LjgxM1oiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIi8+PC9zdmc+" alt="scroll right" />
                </button>
                <div ref={pagination} className={styles.pagination}>
                    {/* { displayPagination() } */}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
