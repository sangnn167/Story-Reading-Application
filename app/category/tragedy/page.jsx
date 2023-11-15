"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const TragedyStory = () => {
  const TragedyStories = storiesData.filter((story) => story.category.includes("Tragedy"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Tragedy</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={TragedyStories}/>
            </div>
          </div>
          <TopViews stories={TragedyStories} />
        </div>
      </div>
    </div>
  );
};
export default TragedyStory;
