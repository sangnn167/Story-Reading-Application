import React from "react";
import styles from "@/app/styles/home.module.css";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import StoryImage from "./StoryImage/page"
import FavoriteButton from "./FavoriteButton/page"
import ChapterNavigation from "./ChapterNavigation/page"
import StoryDetails from "./StoryDetails/page"

const StoryInformation = ({ selectedStory }) => {

  const goToChapter = (chapterNumber) => {
    if (selectedStory?.chapters?.length > 0) {
      const targetChapter =
        chapterNumber === "first"
          ? selectedStory.chapters[0].chapterNumber
          : selectedStory.chapters[selectedStory.chapters.length - 1]
              .chapterNumber;
      const chapterUrl = `/home/${selectedStory.id}/${targetChapter}`;
      window.location.href = chapterUrl;
    }
  };
  return (
    <div className={styles.img}>
      <StoryImage selectedStory={selectedStory} />
      <div>
        <div className={styles.thongtin}>
        <StoryDetails selectedStory={selectedStory} />
          <div className={styles.star}>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
          </div>
          <div className={styles.buttonChapter}>
            <ChapterNavigation goToChapter={goToChapter} />
            <div>
            <FavoriteButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoryInformation;
