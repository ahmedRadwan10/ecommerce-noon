import React from 'react';
import Image from '../Product/Image';
import styles from './QuickReach.module.css';

const QuickReach = ({ quickReach }) => {
  if (quickReach) return (
      <div className={styles.main_container}>
          {quickReach.imgs.map(imgURL => <Image key={imgURL} imgSrc={imgURL} />)}
      </div>
  )
}

export default QuickReach;