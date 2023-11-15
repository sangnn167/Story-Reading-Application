import React from 'react';
import styles from "./styles.module.css"

const Button = ({ onClick, disabled, children }: any) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>

  );
};

export default Button;
