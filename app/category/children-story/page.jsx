"use client";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const ChildrenStory = () => {
  const ChildrenStories = storiesData.filter((story) => story.category.includes("Thiếu nhi"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Thiếu nhi</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={ChildrenStories}/>
            </div>
          </div>
          <TopViews stories={ChildrenStories} />
        </div>
      </div>
    </div>
  );
};
export default ChildrenStory;
