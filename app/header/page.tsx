"use client";
import styles from "@/app/styles/header.module.css";
import Link from "@/node_modules/next/link";

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.headermenu}>
        <ul>
          <li>
            <Link href="/home">
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
                <div className={styles.show}>
                <a className={styles.top} href="/category/fairytale">
                  Cổ tích
                </a>
                <a className={styles.bottom} href="/category/entertaining">
                  Giải trí
                </a>
                <a className={styles.bottom} href="/category/Detective">
                  Trinh thám
                </a>
                <a className={styles.bottom} href="/category/children-story">
                  Thiếu nhi
                </a>
                <a className={styles.bottom} href="/category/one-shot">
                  One shot
                </a>
                <a className={styles.bottom} href="/category/mecha">
                  Mecha
                </a>
                <a className={styles.bottom} href="/category/manga">
                  Manga
                </a>
                <a className={styles.bottom} href="/category/harem">
                  Harem
                </a>
                <a className={styles.bottom} href="/category/ecchi">
                  Ecchi
                </a>
                <a className={styles.bottom} href="/category/psychological">
                  Psychological
                </a>
                <a className={styles.bottom} href="/category/seinen">
                  Seinen
                </a>
                <a className={styles.bottom} href="/category/tragedy">
                  Tragedy
                </a>
                <a className={styles.bottom} href="/category/sliceoflife">
                  Slice of Life
                </a>
                <a className={styles.bottom} href="/category/smut">
                  Smut
                </a>
                <a className={styles.bottom} href="/category/supernatural">
                  Supernatural
                </a>
                </div>
                
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
    </div>
  );
};
export default Header;
