import React from 'react';
import styles from './Footer.module.css';
import Contact from './Contact';
import Categories from './Categories';

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <Contact />
            <Categories />
        </div>
    );
}

export default Footer;