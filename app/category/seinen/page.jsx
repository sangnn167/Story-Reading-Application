"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const SeinenStory = () => {
  const SeinenStories = storiesData.filter((story) => story.category.includes("Seinen"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Seinen</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={SeinenStories}/>
            </div>
          </div>
          <TopViews stories={SeinenStories} />
        </div>
      </div>
    </div>
  );
};
export default SeinenStory;
