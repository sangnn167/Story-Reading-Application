// src/components/SearchInput.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentSearchTerm,setSuggestions,setShowSuggestions,} from '@/app/store/slice/readstories';
import styles from '@/app/styles/trangchu.module.css';
import storiesData from '@/app/Mock/stories';

const SearchInput = () => {
  const dispatch = useDispatch();
  const { showSuggestions, currentSearchTerm,suggestions } = useSelector((state) => state.stories);


  const handleSearchKeywordChange = (e) => {
    const value = e.target.value;
    dispatch(setCurrentSearchTerm(value));

    if (value === '') {
      dispatch(setSuggestions([]));
      dispatch(setShowSuggestions(true));
    } else {
      const filteredSuggestions = storiesData
        .filter((story) =>
          story.title.toLowerCase().includes(value.toLowerCase())
        )
        .map((story) => story.title);
      dispatch(setSuggestions(filteredSuggestions));
      dispatch(setShowSuggestions(true));
    }
  };

  const handleSuggestionClick = (suggestion) => {
    dispatch(setCurrentSearchTerm(suggestion));
    dispatch(setSuggestions([]));
    dispatch(setShowSuggestions(false));
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={currentSearchTerm}
        onChange={handleSearchKeywordChange}
      />
      <div className={styles.keyword}>
        {showSuggestions && suggestions.length > 0 && (
          <div className={styles.suggestions}>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={styles.suggestionItem}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
