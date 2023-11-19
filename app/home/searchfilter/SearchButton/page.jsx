// src/components/SearchButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKeyword, setSuggestions, setShowSuggestions } from '@/app/store/slice/readstories';
import Button from '@/app/Common/Button/page';
import styles from '@/app/styles/trangchu.module.css';

const SearchButton = () => {
  const dispatch = useDispatch();
  const currentSearchTerm = useSelector((state) => state.stories.currentSearchTerm);

  const handleSearch = () => {
    dispatch(setSearchKeyword(currentSearchTerm));
    dispatch(setSuggestions([]));
    dispatch(setShowSuggestions(false));
  };

  return (
    <div className={styles.dropdown}>
      <Button className={styles.searchButton} onClick={handleSearch}>
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchButton;
