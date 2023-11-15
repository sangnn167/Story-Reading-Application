import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/categoryy.module.css";

const StoryList = ({ stories }) => {
  return (
    <div className={styles.itemleft}>
      <div className={styles.ul}>
        <ul>
          {stories.map((story) => (
            <li key={story.id}>
              <div>
                <div className={styles.card}>
                  <div className={styles.itemleft}>
                    <Image
                      src={story.imgUrl}
                      alt={story.title}
                      width={130}
                      height={180}
                    />
                    <div className={styles.title}>
                      <Link href={`/home/${story.id}`}>
                        <h2>{story.title}</h2>
                      </Link>
                      <div className={styles.author}>
                        <picture>
                          <img
                            src="/icons/penn.png"
                            width={"20px"}
                            height={"20px"}
                            alt=""
                          />{" "}
                        </picture>
                        <i>{story.author}</i>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chapterlenght}>
                    Số chương: {story.chapters.length}
                  </div>
                </div>
                <div className={styles.lineeee}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StoryList;
