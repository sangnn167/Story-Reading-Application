import React from "react";
import styles from "@/app/styles/home.module.css";

const ChapterNavigation = ({ goToChapter }) => {
  return (
    <div className={styles.buttonNavigation}>
      <div className={styles.buttonPrev}>
        <button onClick={() => goToChapter("first")}>Đọc từ đầu</button>
      </div>
      <div className={styles.buttonPrev}>
        <button onClick={() => goToChapter("latest")}>Đọc mới nhất</button>
      </div>
    </div>
  );
};

export default ChapterNavigation;
