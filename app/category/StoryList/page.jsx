import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/categoryy.module.css";
import { FaPencil } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
const StoryList = ({ stories }) => {
  return (
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
                      <div className={styles.author}>
                      <FaBook  /><h2>{story.title}</h2>
                      </div>
                      </Link>
                      <div className={styles.author}>
                      <FaPencil />
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
  );
};

export default StoryList;
