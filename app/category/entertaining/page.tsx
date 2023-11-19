"use client";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/categoryy.module.css";
import TopViews from "@/app/category/topviews/page";
import Header from "@/app/header/page";
import StoryList from "../StoryList/page"
const Entertaining = () => {
  const EntertainingStories = storiesData.filter((story) => story.category.includes("Giải trí"));
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Giải trí</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
                <StoryList stories={EntertainingStories}/>
            </div>
          </div>
          <TopViews stories={EntertainingStories} />
        </div>
      </div>
    </div>
  );
};
export default Entertaining;
