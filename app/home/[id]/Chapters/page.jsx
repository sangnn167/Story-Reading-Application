import React from "react";
import Link from "next/link";
import styles from "@/app/styles/home.module.css";

const Chapters = ({ selectedStory }) => {
  
  return (
    <div className={styles.chapter}>
      {selectedStory.chapters && selectedStory.chapters.length > 0 && (
        <div className={styles.chapterr}>
          <ul>
            {selectedStory.chapters.map((chapter, index) => (
              <li key={index}>
                <Link
                  href={`/home/${selectedStory.id}/${chapter.chapterNumber}`}
                >
                  <div className={styles.item}>
                    <strong>
                      Chapter {chapter.chapterNumber}: {chapter.chapterTitle}
                    </strong>
                    <p>
                      {chapter.chapterDatePosted}
                      {"⮞"}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Chapters;
