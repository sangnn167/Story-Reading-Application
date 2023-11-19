
import React from 'react';
import styles from '@/app/styles/home.module.css';

const Description = ({ description }) => {
  return (
    <div className={styles.containerdescription}>
      <div className={styles.inline}></div>
      <div className={styles.description}>
        <p>
          <strong>Mô tả:</strong> {description}
        </p>
      </div>
    </div>
  );
};

export default Description;
