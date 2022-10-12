import React from 'react';
import styles from "./Product.module.css";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../apis/products';
import ProductData from './ProductData';

const Product = () => {
    const categories = useSelector(({ categoryState }) => categoryState.categories);
    const product = useSelector(({ categoryState }) => categoryState.selectedProduct);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (categories) getProduct(dispatch, categories, params.categoryID, params.subCategoryID, params.productID)
    }, [params, categories])

    if (product.id) return (
        <div className={styles.main_container}>
            <div className={styles.nav_container}>
                <Link to={`/${params.categoryTitle}`}>{params.categoryTitle}</Link>
                <span>{">"}</span>
                <Link to={`/${params.categoryTitle}/${params.subCategoryTitle}`}>{params.subCategoryTitle}</Link>
                <span>{">"}</span>
                <Link>{params.productTitle}</Link>
            </div>
            <div className={styles.flex_container}>
                <div>
                    <img src={product["img-src"].replace(/tr:n-t_80/i, "tr:n-t_400")} alt={product.title} />
                </div>
               <ProductData product={product} />
            </div>
        </div>
    );
}

export default Product;