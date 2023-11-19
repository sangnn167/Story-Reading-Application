"use client";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const supernaturalStory = () => {
  const supernaturalStories = storiesData.filter((story) => story.category.includes("Supernatural"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Supernatural</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={supernaturalStories}/>
            </div>
          </div>
          <TopViews stories={supernaturalStories} />
        </div>
      </div>
    </div>
  );
};
export default supernaturalStory;
