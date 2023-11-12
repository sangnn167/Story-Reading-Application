import React from "react";
import { useDispatch, useSelector } from "@/node_modules/react-redux/es/exports";
import Form from "react-bootstrap/Form";
import {setSearchKeyword,setSelectedCategory} from "@/app/store/slice/readstories";
import styles from "@/app/styles/trangchu.module.css";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { selectedCategory, searchKeyword } = useSelector((state:any) => state.stories);
  const handleSearchKeywordChange = (e:any) => {dispatch(setSearchKeyword(e.target.value))};
  const handleCategoryChange = (e:any) => {dispatch(setSelectedCategory(e.target.value))};

  return (
    <div className={styles.newStoryUpdate}>
      <div className={styles.itemStoryUpdate}>
        <h1>SEARCH & FILTER</h1>
        <div className={styles.search}>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
            />
          </div>
          <div className={styles.dropdown}>
            <Form.Select
              className={styles.customselect}
              aria-label="Default select example"
              value={selectedCategory}
              onChange={handleCategoryChange}>
              <option value="1">Tất cả</option>
              <option value="2">Cổ tích</option>
              <option value="3">Giải trí</option>
            </Form.Select>
          </div>
        </div>
        <div className={styles.inline}></div>
      </div>
    </div>
  );
};

export default SearchFilter;
