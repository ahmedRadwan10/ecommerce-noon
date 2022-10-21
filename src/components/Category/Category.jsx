import React, { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../apis/products';
import { getSlider } from '../../apis/sliders';
import ImageSlider from '../Collection/ImageSlider';
import Spinner from '../Spinner/Spinner';
import styles from "./Category.module.css";

const Category = () => {

    const ProductsOverview = lazy(async () =>  {
        return new Promise(resolve => setTimeout(resolve, 1000)).then(
          () => import("../Collection/ProductsOverview")
        );
    });

    const params = useParams();
    const dispatch = useDispatch();
    const slider = useSelector(({ collectionState }) => collectionState.sliders[ params.categoryTitle === "home" ? "home-kitchen" : params.categoryTitle]);
    const subCategories = useSelector(({ categoryState }) => categoryState.subCategories);

    const renderProductsOverviews = () => {
        if (subCategories) return subCategories.map(sub => <ProductsOverview key={sub.title} data={{ title: sub.title, products: sub.products }} />);
      }

    useEffect(() => {
        document.title = `${params.categoryTitle.charAt(0).toUpperCase()}${params.categoryTitle.slice(1)} | Online Shopping`;
        getSlider(dispatch, params.categoryTitle === "home" ? "home-kitchen" : params.categoryTitle);
        getCategoryProducts(dispatch, params.categoryTitle);
    }, [params, dispatch]);

    return (
        <div className={styles.main_container}>
            <Suspense fallback={<Spinner />}>
                <ImageSlider slider={slider} />    
                { renderProductsOverviews() } 
            </Suspense>
        </div>
    );
}

export default Category;