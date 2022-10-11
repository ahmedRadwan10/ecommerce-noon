import React from 'react';
import styles from './QuickReach.module.css';

const QuickReach = ({ quickReach }) => {
  if (quickReach) return (
      <div className={styles.main_container}>
          {quickReach.imgs.map(imgURL => <img key={imgURL} src={imgURL} alt="Quick Reach" />)}
      </div>
  )
}

export default QuickReach;