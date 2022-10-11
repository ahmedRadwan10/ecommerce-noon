import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../apis/products';
import { getSlider } from '../../apis/sliders';
import ImageSlider from '../Collection/ImageSlider';
import ProductsOverview from '../Collection/ProductsOverview';
import styles from "./Category.module.css";

const Category = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const slider = useSelector(({ collectionState }) => collectionState.sliders[ params.categoryTitle === "home" ? "home-kitchen" : params.categoryTitle]);
    const subCategories = useSelector(({ categoryState }) => categoryState.subCategories);

    const renderProductsOverviews = () => {
        if (subCategories) return subCategories.map(sub => <ProductsOverview key={sub.title} data={{ title: sub.title, products: sub.products }} />);
      }

    useEffect(() => {
        getSlider(dispatch, params.categoryTitle === "home" ? "home-kitchen" : params.categoryTitle);
        getCategoryProducts(dispatch, params.categoryTitle);
    }, [params]);

    return (
        <div className={styles.main_container}>
            <ImageSlider slider={slider} />    
            { renderProductsOverviews() } 
        </div>
    );
}

export default Category;