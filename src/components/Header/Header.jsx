import React from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <LeftHeader styles={styles} />
      <input className={styles.search_input} type="text" name="search" placeholder="What are you looking for?" autoComplete="off" />
      <RightHeader styles={styles} />
    </div>
  );
};

export default Header;
