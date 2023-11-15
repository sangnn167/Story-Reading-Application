"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const SmutStory = () => {
  const SmutStories = storiesData.filter((story) => story.category.includes("Smut"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Smut</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={SmutStories}/>
            </div>
          </div>
          <TopViews stories={SmutStories} />
        </div>
      </div>
    </div>
  );
};
export default SmutStory;
