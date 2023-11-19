import React from "react";
import styles from "@/app/styles/trangchu.module.css";

const StoryGenre = () => {
  return (
    <div className={styles.itemGenre}>
      <div className={styles.titleHistory}>
        <p>Thể loại truyện</p>
      </div>
      <div className={styles.inline}></div>
      <ul>
        <div className={styles.containerrrrrr}>
          <div className={styles.row}>
            <div className={styles.titleCategory}>
              <li><a href="/category/fairytale">Cổ tích</a></li>
              <li><a href="/category/entertaining">Giải trí</a></li>
              <li><a href="/category/mecha">Mecha</a></li>
              <li><a href="/category/manga">Manga</a></li>
              <li><a href="/category/smut">Smut</a></li>
              <li><a href="/category/harem">Harem</a></li>
              <li><a href="/category/tragedy">Tragedy</a></li>
              <li><a href="/category/sliceoflife">Slice of life </a></li>
            </div>
            <div className={styles.titleCategory}>
              <li><a href="/category/Detective">Trinh thám</a></li>
              <li><a href="/category/children-story">Thiếu nhi</a></li>
              <li><a href="/category/one-shot">One shot</a></li>
              <li><a href="/category/psychological">Psychological</a></li>
              <li><a href="/category/seinen">Seinen</a></li>
              <li><a href="/category/supernatural">Supernatural</a></li>
              <li><a href="/category/ecchi">Ecchi</a></li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default StoryGenre;
