  import React, { useState} from "react";
  import { useDispatch, useSelector } from "react-redux";
  import Form from "react-bootstrap/Form";
  import { setSearchKeyword, setSelectedCategory } from "@/app/store/slice/readstories";
  import styles from "@/app/styles/trangchu.module.css";
  import storiesData from "@/app/data/stories";
import Button from "@/app/Common/Button/page";

  const SearchFilter = () => {
    const dispatch = useDispatch();
    const {selectedCategory, searchKeyword} = useSelector((state: any) => state.stories);
    const [currentSearchTerm, setCurrentSearchTerm] = useState(searchKeyword);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const handleSearchKeywordChange = (e: any) => {
      const value = e.target.value;
      setCurrentSearchTerm(value);
      if (value === "") {
        setSuggestions([]);
        setShowSuggestions(true);
      } else {
        const filteredSuggestions = storiesData
          .filter((story) => story.title.toLowerCase().includes(value.toLowerCase()))
          .map((story) => story.title);
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
      }
    };
    const handleSuggestionClick = (suggestion: string) => {
      setCurrentSearchTerm(suggestion);
      setSuggestions([]);
      setShowSuggestions(false); 
    };

    const handleSearch = () => { 
      dispatch(setSearchKeyword(currentSearchTerm));
      setSuggestions([]);
      setShowSuggestions(false);
    };
    const handleCategoryChange = (e: any) => { dispatch(setSelectedCategory(e.target.value))};

    return (
      <div className={styles.newStoryUpdate}>
        <div className={styles.itemStoryUpdate}>
          <h1>SEARCH & FILTER</h1>
          <div className={styles.search}>
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
                      <div key={index} className={styles.suggestionItem} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.dropdown}>
            <Button className={styles.searchButton} onClick={handleSearch}>
              Tìm kiếm
            </Button>
              <Form.Select
                className={styles.customselect}
                aria-label="Default select example"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="1">Tất cả</option>
                <option value="2">Giải trí</option>
                <option value="3">Cổ tích</option>
              </Form.Select>
            </div>
          </div>
          <div className={styles.inline}></div>
        </div>
      </div>
    );
  };

  export default SearchFilter;
