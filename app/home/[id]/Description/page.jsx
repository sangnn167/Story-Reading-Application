import React, { useState } from 'react';
import styles from '@/app/styles/home.module.css';

const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.containerdescription}>
      <div className={styles.inline}></div>
      <div className={styles.description}>
        <p>
          <strong>Mô tả:</strong>{' '}
          {isExpanded ? description : `${description.slice(0, maxLength)}${description.length > maxLength ? '...' : ''}`}
          {description.length > maxLength && (
            <span onClick={toggleExpand} style={{ cursor: 'pointer', color: 'blue', marginLeft: '5px' }}>
              {isExpanded ? 'Thu gọn' : 'Xem thêm'}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Description;
