import React from 'react';
import styles from "./Product.module.css";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../apis/products';
import ProductData from './ProductData';
import Image from './Image';
import MoreData from './MoreData';
import { removeSelectedProduct } from '../../redux/slices/categorySlice';

const Product = () => {
    const categories = useSelector(({ categoryState }) => categoryState.categories);
    const product = useSelector(({ categoryState }) => categoryState.selectedProduct);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct(dispatch, params.subID, params.productID);
        return () => dispatch(removeSelectedProduct());
    }, [categories, params]);

    if (product.id) return (
        <div className={styles.main_container}>
            <div className={styles.nav_container}>
                <Link to={`/${product.category.title}`}>{product.category.title}</Link>
                <span>{">"}</span>
                <Link to={`/${product.category.title}/${product.subCategory.title}`}>{product.subCategory.title}</Link>
            </div>
            <div className={styles.flex_container}>
                <div className={styles.product_img_container}>
                    <Image imgSrc={product["img-src"].replace(/tr:n-t_80/i, "tr:n-t_400")} imgAlt={product.title} />
                </div>
               <ProductData product={product} />
               <MoreData  product={product}/>
            </div>
        </div>
    );
}

export default Product;