import React from 'react';
import styles from "./Product.module.css";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDealsProducts, getHotDealsProducts, getProduct, getSubCategory } from '../../apis/products';
import ProductData from './ProductData';
import Image from './Image';
import MoreData from './MoreData';
import { removeSelectedProduct } from '../../redux/slices/categorySlice';
import ProductsOverview from '../Collection/ProductsOverview';

const Product = () => {
    const subCategory = useSelector(({ categoryState }) => categoryState.selectedSubCategory);
    const subCategoryDeal = useSelector(({ collectionState }) => collectionState.deals[`${subCategory.title} deals`]);
    const product = useSelector(({ categoryState }) => categoryState.selectedProduct);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (product.id) document.title = `${product.title} | Online Shopping`;
        return () => document.title = "Online Shopping";
    }, [product]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct(dispatch, params.subID, params.productID);
        getSubCategory(dispatch, params.subID);
        getAllDealsProducts(dispatch, 5);
        return () => dispatch(removeSelectedProduct());
    }, [params, dispatch]);

    return (
        <div className={styles.main_container}>
            { product.id ?
                <>
                    <div className={styles.nav_container}>
                                <Link to={`/${product.category.title}`}>{product.category.title}</Link>
                                <span><i className="fa-solid fa-chevron-right"></i></span>
                                <Link to={`/${product.category.title}/${product.subCategory.title}`}>{product.subCategory.title}</Link>
                    </div>
                    <div className={styles.flex_container}>
                        <div className={styles.product_img_container}>
                            <Image imgSrc={`/data/assets/products/${product["img-src"].split('/').at(-1)}`} imgAlt={product.title} />
                        </div>
                        <ProductData product={product} />
                        <MoreData  product={product} />
                    </div>
                </> : ""}
            <ProductsOverview data={{ ...subCategoryDeal, title: `${subCategory.title} deals` }}/>
            <ProductsOverview data={{ ...subCategory, title: `More ${subCategory.title}` }}/>
        </div>
    );
}

export default Product;