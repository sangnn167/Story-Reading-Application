"use client";
import storiesData from "../../Data/stories";
import styles from "@/app/styles/profile.module.css";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import { useState } from 'react';
const Favourite = () => {
  const [favoriteStories, setFavoriteStories] = useState(storiesData.filter((story) => story.favourite));

  const handleDelete = (storyId:number) => {
    const updatedStories = favoriteStories.filter((story) => story.id !== storyId);
    setFavoriteStories(updatedStories);
  };

  return (
    <div className={styles.tab1}>
      <div className={styles.list}>
        <ul>
          {
            favoriteStories.map((story) => (
              <li key={story.id}>
                <div className={styles.storyContainer}>
                  <Image
                    src="https://vnkings.com/wp-content/uploads/2017/06/19665128_278555815952158_3528244146282740007_n-copy.jpg"
                    alt={story.title}
                    width={230}
                    height={180}
                  />
                  <div className={styles.buttonContainer}>
                    <div className={styles.delete}><button className={styles.deletebutton} onClick={() => handleDelete(story.id)}>
                      <svg className={styles.deletesvgIcon} viewBox="0 0 448 512">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button></div>
                  </div>
                </div>
                  <div className={styles.title}><Link href={`/Home/${story.id}`}> {story.title}</Link></div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
export default Favourite;
