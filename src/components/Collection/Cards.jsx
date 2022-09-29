import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ cards }) => {
    if (cards.cardsImgs) return (
        <div className={styles.main_container}>
            {cards.cardsImgs.map(imgURL => <img key={imgURL} src={imgURL} alt="Electronics Card" />)}
            <img className={styles.header_img} src={cards.headerImg} alt="" />
        </div>
    );
}

export default Cards;