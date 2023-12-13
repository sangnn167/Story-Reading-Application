"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import storiesData from "../../../Mock/stories";
import styles from "@/app/styles/home.module.css"
import Header from '@/app/header/page';

const ChapterPage = ({ params }: { params: { id: string; idchapter: string } }) => {
  const storyId = params.id;
  const chapterNumber = parseInt(params.idchapter);
  const [fontSize, setFontSize] = useState(16);

  const selectedStory = storiesData.find((story) => story.id.toString() === storyId);
  const selectedChapter = selectedStory?.chapters?.find((chapter) => chapter.chapterNumber === chapterNumber);

  const increaseFontSize = () => { setFontSize((prevSize) => prevSize + 2) };
  const decreaseFontSize = () => { setFontSize((prevSize) => Math.max(12, prevSize - 2)) };

  const previousChapterNumber = chapterNumber - 1;
  const nextChapterNumber = chapterNumber + 1;
  const previousChapterLink = `/home/${storyId}/${previousChapterNumber}`;
  const nextChapterLink = `/home/${storyId}/${nextChapterNumber}`;

  return (
    <div className={styles.containerchapter}>
      <Header/>
      <div className={styles.header}>
        <p className={styles.truyen}><picture><img src="/icons/home.png" width={"18px"} alt="" /></picture> <Link href={`/home`}>Truyện</Link></p>/<p><Link href={`/home/${selectedStory?.id}`}>{selectedStory?.title}</Link></p>/<p>Chương {selectedChapter?.chapterNumber}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.headerContent}>
          <h1>Chapter {selectedChapter?.chapterNumber}:{selectedChapter?.chapterTitle}</h1>
          <div className={styles.button}>
            <Link href={previousChapterLink}>
              <button disabled={previousChapterNumber <= 0}>Chương trước</button>
            </Link>
            <div className={styles.fontsize}>
              <button onClick={decreaseFontSize}>-</button>
              <span>{fontSize}</span>
              <button onClick={increaseFontSize}>+</button>
            </div>
            <Link href={nextChapterLink}>
              <button disabled={nextChapterNumber > (selectedStory?.chapters?.length || 0)}>Chương tiếp</button>
            </Link>
          </div>
        </div>
        <div className={styles.noidung} style={{ fontSize: `${fontSize}px` }}>
          {/* <p>{selectedChapter?.chapterDescription}</p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>${selectedChapter?.chapterDescription || ''}</p>`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
