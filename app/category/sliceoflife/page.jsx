"use client";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const SliceoflifeStory = () => {
  const SliceoflifeStories = storiesData.filter((story) => story.category.includes("Sliceoflife"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Sliceoflife</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={SliceoflifeStories}/>
            </div>
          </div>
          <TopViews stories={SliceoflifeStories} />
        </div>
      </div>
    </div>
  );
};
export default SliceoflifeStory;
