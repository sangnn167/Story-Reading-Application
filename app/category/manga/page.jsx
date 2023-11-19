"use client";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const MangaStory = () => {
  const MangaStories = storiesData.filter((story) => story.category.includes("Manga"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Manga</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={MangaStories}/>
            </div>
          </div>
          <TopViews stories={MangaStories} />
        </div>
      </div>
    </div>
  );
};
export default MangaStory;
