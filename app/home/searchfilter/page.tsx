import React from 'react';
import styles from '@/app/styles/trangchu.module.css';
import SearchInput from "./SearchInput/page"
import SearchButton from "./SearchButton/page"


const SearchFilter = () => {

  return (
    <div className={styles.newStoryUpdate}>
      <div className={styles.itemStoryUpdate}>
        <div className={styles.search}>
          <SearchInput />
          <SearchButton />
        </div>
        <div className={styles.inline}></div>
      </div>
    </div>
  );
};

export default SearchFilter;
