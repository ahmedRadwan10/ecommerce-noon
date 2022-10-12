import React from 'react';
import { useEffect } from 'react';
import styles from "./Product.module.css";
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { useState } from 'react';

const ProductData = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const renderOldPrice = () => {
        return <div className={styles.old_price}>
                    <span>Was :</span>
                    <span>EGP {product.old_price.toFixed(2)}</span>
                </div>
    }

    const renderNewPrice = () => {
        return <div className={styles.new_price}>
                    <span>Now :</span>
                    <span><strong>EGP  {product.new_price.toFixed(2)}</strong> Inclusive of VAT</span>
                </div>
    }

    const renderSaving = () => {
        return <div className={styles.saving}>
                    <span>Saving :</span>
                    <span>EGP{(product.new_price - product.old_price).toFixed(2)}</span>
                    <div className={styles.sale_container}>
                        {Math.floor(100 - (product.new_price / product.old_price) * 100)}% OFF
                    </div>
                </div>
    }

    const renderDeliveryDate = () => {

        const date = new Date();
        const month = date.toLocaleString('default', { month: 'short' });
        const dayNumber = date.getDate();
        const dayString = date.toLocaleString('default', { weekday: 'short' });
        
        return <div className={styles.delivery_container}>
                    <p>
                        <strong>Free delivery </strong>
                        by
                        <strong> {dayString} </strong>
                        ,
                        <strong> {month} {dayNumber} </strong>
                    </p>
                    <div className={styles.express}>
                        <img src="https://f.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="Express Delivery" />
                    </div>
                </div>
    }

    const handleSelectChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className={styles.all_data_container}>
            <h4>{product.brand_name}</h4>
            <h3>{product.title}</h3>
            <div className={styles.model_container}>
                <p>{product.model_number}</p>
                { product.rating ? <div className={styles.rating_container}>{product.rating}<i className="fa-solid fa-star fa-sm"></i></div> : "" }
                <p className={styles.reviews}>{product.reviews_number}</p>
            </div>
            { product.old_price ? renderOldPrice() : "" }
            { product.new_price ? renderNewPrice() : "" }
            { product.old_price ? renderSaving() : "" }
            {renderDeliveryDate()}
            <div className={styles.add_to_cart_container}>
                <Select
                    sx={{ width: "20%", height: "100%", fontFamily: "inherit", outline: "none", border: "none" }}
                    labelId="demo-simple-select-label"
                    value={quantity}
                    onChange={handleSelectChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>

                <button>Add To cart</button>
            </div>
        </div>
    );
}

export default ProductData;