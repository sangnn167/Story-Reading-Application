
import storiesData from "../../../data/stories";
import styles from "@/app/styles/home.module.css"

const ChapterPage = ({ params }: { params: { id: string; idchapter: string } }) => {
  const storyId = params.id;
  const chapterNumber = parseInt(params.idchapter);

  const selectedStory = storiesData.find((story) => story.id.toString() === storyId);
  const selectedChapter = selectedStory?.chapters?.find((chapter) => chapter.chapterNumber === chapterNumber);

  return (
    <div className={styles.containerchapter}>
      <div className={styles.content}>
        <h1>{selectedChapter?.chapterTitle}</h1>
        <div className={styles.noidung}>
          <p>{selectedChapter?.chapterDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
