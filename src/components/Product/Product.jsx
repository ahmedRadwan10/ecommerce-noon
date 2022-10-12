import React from 'react';
import styles from "./Product.module.css";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../apis/products';
import ProductData from './ProductData';
import Image from './Image';
import MoreData from './MoreData';

const Product = () => {
    const categories = useSelector(({ categoryState }) => categoryState.categories);
    const product = useSelector(({ categoryState }) => categoryState.selectedProduct);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (product.id) return (
        <div className={styles.main_container}>
            <div className={styles.nav_container}>
                <Link to={`/${params.categoryTitle}`}>{params.categoryTitle}</Link>
                <span>{">"}</span>
                <Link to={`/${params.categoryTitle}/${params.subCategoryTitle}`}>{params.subCategoryTitle}</Link>
            </div>
            <div className={styles.flex_container}>
                <div>
                    <Image className={styles.product_img} imgSrc={product["img-src"].replace(/tr:n-t_80/i, "tr:n-t_400")} imgAlt={product.title} />
                </div>
               <ProductData product={product} />
               <MoreData  product={product}/>
            </div>
        </div>
    );
}

export default Product;