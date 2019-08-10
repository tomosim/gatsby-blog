import React from 'react';
import { Link } from 'gatsby';
import styles from "./button.module.css"

const Button = ({ to }) => {
  return (
    <Link to={to}>
      <button className={styles.button}>
        See more
      </button>
    </Link>
  );
};

export default Button;