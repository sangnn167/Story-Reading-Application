"use client";
import styles from "@/app/styles/header.module.css";
import Link from "@/node_modules/next/link";
import React, { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = () => {
    if (searchValue.trim() === '') {
      alert("Mời bạn nhập vào chỗ trống");
    } else {
      //Sử lý sau khi chuyển trang
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.headermenu}>
        <ul>
          <li>
            <Link href="/home/">
              <div className={styles.item}>
                <picture>
                  <img src="/icons/home.png" width={"25px"} alt="" />
                </picture>
                Trang chủ
              </div>
            </Link>
          </li>
          <li>
            <div className={styles.pastebutton}>
              <div className={styles.item}>
                <picture>
                  <img src="/icons/category.png" width={"25px"} alt="" />
                </picture>
                Thể loại
              </div>
              <div className={styles.dropdowncontent}>
                <a className={styles.top} href="/category/fairytale">
                  Cổ tích
                </a>
                <a className={styles.bottom} href="/category/entertaining">
                  Giải trí
                </a>
              </div>
            </div>
          </li>
          <li>
            <Link href="/profile/">
              <div className={styles.item}>
                <picture>
                  <img src="/icons/people.png" width={"23px"} alt="" />
                </picture>
                Cá Nhân
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.search}>
        <div className={styles.input}>
          <input type="search" placeholder="Tìm kiếm..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className={styles.button}>
          <button onClick={handleSearch}>Tìm kiếm</button> 
        </div>
      </div>

    </div>
  );
};
export default Header;
