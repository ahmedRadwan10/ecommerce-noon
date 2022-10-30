import React, { Suspense } from 'react';
import styles from "./Product.module.css";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDealsProducts, getProduct, getSubCategory } from '../../apis/products';
import Image from './Image';
import { removeSelectedProduct } from '../../redux/slices/categorySlice';
import { lazy } from 'react';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';

const Product = () => {

    const ProductsOverview = lazy(async () =>  {
        return new Promise(resolve => setTimeout(resolve, 2000)).then(
          () => import("../Collection/ProductsOverview")
        );
    });
    
    const ProductData = lazy(async () =>  {
        return new Promise(resolve => setTimeout(resolve, 1000)).then(
          () => import("./ProductData")
        );
    });
    
    const MoreData = lazy(async () =>  {
        return new Promise(resolve => setTimeout(resolve, 500)).then(
          () => import("./MoreData")
        );
    });

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
                    <Suspense fallback={<Spinner />}>
                        <div className={styles.nav_container}>
                                    <Link to={`/${product.category.title}`}>{product.category.title}</Link>
                                    <span><i className="fa-solid fa-chevron-right"></i></span>
                                    <Link to="">{product.subCategory.title}</Link>
                        </div>
                        <div className={styles.flex_container}>
                                <div className={styles.product_img_container}>
                                    <Image imgSrc={`/data/assets/products/${product["img-src"].split('/').at(-1)}`} imgAlt={product.title} />
                                </div>
                                <ProductData product={product} />
                                <MoreData product={product} />
                        </div>
                    </Suspense>
                </> : ""}
            <Suspense fallback={''}>
                <ProductsOverview data={{ ...subCategoryDeal, title: `${subCategory.title} deals` }}/>
                <ProductsOverview data={{ ...subCategory, title: `More ${subCategory.title}` }}/>
                <Footer />      
            </Suspense>
        </div>
    );
}

export default Product;