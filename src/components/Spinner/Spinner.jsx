import React from 'react';
import styles from './Spinner.module.css'


const Spinner = () => {
    return (
        <div className={styles.container}>
          <img className={styles.loader} src="/data/assets/gif/noon-loader.gif" alt="Loader" />
        </div>
    );
}

export default Spinner;