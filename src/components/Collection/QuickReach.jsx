import React from 'react';
import styles from './QuickReach.module.css';

const QuickReach = ({ imgs }) => {
  if (imgs) return (
      <div className={styles.main_container}>
          {imgs.map(imgURL => <img key={imgURL} src={imgURL} alt="Quick Reach" />)}
      </div>
  )
}

export default QuickReach;