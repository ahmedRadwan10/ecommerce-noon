import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import Contact from './Contact';
import Categories from './Categories';

const Footer = () => {

    return (
        <footer className={styles.footer_container}>
            <Contact />
            <Categories />
        </footer>
    );
}

export default Footer;