"use client";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page";
const Fairytale = () => {
  const FairytaleStories = storiesData.filter((story) => story.category.includes("Cổ tích"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Cổ tích</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
              <StoryList stories={FairytaleStories}/>
            </div>
          </div>
          <TopViews stories={FairytaleStories} />
        </div>
      </div>
    </div>
  );
};
export default Fairytale;
