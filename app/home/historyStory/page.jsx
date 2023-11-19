import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "@/app/styles/trangchu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteHistoryStory } from "../../store/slice/readstories"

const HistoryStory = () => {

  const historyStories = useSelector((state) => state.stories.historyStories);
  const dispatch = useDispatch();

  const handleDelete = (storyId) => {
    dispatch(deleteHistoryStory(storyId));
  };
  
  return (
    <div className={styles.itemHistory}>
      <div className={styles.titleHistory}>
        <p>Lịch sử đọc truyện</p>
      </div>
      <div className={styles.inline}></div>
      <ul>
        {historyStories.map((history) => (
          <li key={history.id}>
            <div className={styles.historyItem}>
              <picture>
                <img
                  src={history.imgUrl}
                  alt={history.title}
                  style={{ width: "130px", height: "90px" }}
                />
              </picture>
              <div className={styles.historyTitle}>
                <div className={styles.historyName}>
                  <a href={`/home/${history.id}`}>{history.title}</a>
                </div>{" "}
                <div
                  className={styles.deleteHistory}
                  onClick={() => handleDelete(history.id)}
                >
                  <IoCloseSharp /> <i>Xóa</i>
                </div>
              </div>
            </div>
            <div className={styles.inline}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryStory;
