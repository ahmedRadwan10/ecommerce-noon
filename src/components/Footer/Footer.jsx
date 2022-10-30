import React, { lazy, Suspense, useEffect, useState } from 'react';
import styles from './Footer.module.css';
import Contact from './Contact';
import Categories from './Categories';
import { useParams } from 'react-router-dom';

const Footer = () => {
    
    return (
        <footer className={styles.footer_container}>
            <Suspense fallback={''}>
                <Contact />
                <Categories />
            </Suspense>
        </footer>
    );
}

export default Footer;