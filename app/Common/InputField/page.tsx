import React from 'react';
import styles from "./styles.module.css"
const InputField = ({ type, placeholder, value, onChange}:any) => {
  return (
    <div className={styles.input}>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
    
  );
};

export default InputField;