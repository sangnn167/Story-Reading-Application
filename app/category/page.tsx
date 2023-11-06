"use client";
import storiesData from "../data/stories";
import styles from "@/app/styles/category.module.css";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
  const filteredStories = storiesData.filter((story) => story.category === "Ma");
  const filteredStorie = storiesData.filter((story) => story.category === "Giaitri");
  return (
    <div className={styles.container}>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <h1>Kinh dị</h1>
          <div className={styles.item}>
            <ul>
              {filteredStories.map((story) => (
                <li key={story.id}>
                  <div className={styles.card}>
                    <Link href={`/home/${story.id}`}>
                      <Image
                        src="https://vnkings.com/wp-content/uploads/2017/06/19665128_278555815952158_3528244146282740007_n-copy.jpg"
                        alt={story.title}
                        width={230}
                        height={180}
                      />
                      <h2>{story.title}</h2>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <h1>Giải trí</h1>
          <div className={styles.item}>
            <ul>
              {filteredStorie.map((story) => (
                <li key={story.id}>
                  <div className={styles.card}>
                    <Link href={`/home/${story.id}`}>
                      <Image
                        src="https://vnkings.com/wp-content/uploads/2017/06/19665128_278555815952158_3528244146282740007_n-copy.jpg"
                        alt={story.title}
                        
                        width={230}
                        height={180}
                      />
                      <h2>{story.title}</h2>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
