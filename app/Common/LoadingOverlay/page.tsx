// LoadingOverlay.js
import React from 'react';
import styles from "./styles.module.css";

const LoadingOverlay = () => {
  return (
    <div className="loadingoverlay">
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingOverlay;
