"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/categoryy.module.css";
import Link from "next/link";
import Image from "next/image";
import TopViews from "../topviews/page";
const Entertaining = () => {
  const EntertainingStories = storiesData.filter((story) => story.category.includes("Giải trí"));
  return (
    <div className={styles.container}>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.containerLeft}>
            <h1>Giải trí</h1>
            <div className={styles.lineee}>
              <div className={styles.line}></div>
              <div className={styles.linee}></div>
            </div>
            <div className={styles.itemleft}>
              <div className={styles.ul}>
                <ul>
                  {EntertainingStories.map((story) => (
                    <li key={story.id}>
                      <div>
                        <div className={styles.card}>
                          <div className={styles.itemleft}>
                            <Image
                              src="https://vnkings.com/wp-content/uploads/2017/06/19665128_278555815952158_3528244146282740007_n-copy.jpg"
                              alt={story.title}
                              width={122}
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
          </div>
          <TopViews stories={EntertainingStories} />
        </div>
      </div>
    </div>
  );
};
export default Entertaining;
