"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/profile.module.css";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";

const Favourite = () => {
  const filteredStories = storiesData.filter((story) => story.favourite === true);

  return (
    <div className={styles.container}>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.headertop}>
            <div className={styles.itemtop}>
              <Link href="/profile">
              <div className={styles.icon}>
                  <img src="/icons/bookss.png" alt="" />
                  <h1>Truyện</h1>
                </div>
              </Link>
            </div>
            <div className={styles.inlice}></div>
            <div className={styles.itemtop}>
              <Link href="/profile/favourite">
              <div className={styles.icon}>
                  <img src="/icons/heart.png" alt="" />
                  <h1>Yêu thích</h1>
                </div>
              </Link>
            </div>
            <div className={styles.inlice}></div>
            <div className={styles.itemtop}>
            <Link href="/profile/follow">
            <div className={styles.icon}>
                <img src="/icons/follow.png" alt="" />
                  <h1>Đang theo dõi</h1>
                </div>
              </Link>
            </div>
          </div>
          <h1>Truyện đang yêu thích</h1>
          <div className={styles.item}>
            
            <ul>
              {filteredStories.map((story) => (
                <li key={story.id}>
                  <div>
                    <Link href={`/home/${story.id}`}>
                      <div className={styles.card}>
                        <Image
                          src="https://vnkings.com/wp-content/uploads/2017/06/19665128_278555815952158_3528244146282740007_n-copy.jpg"
                          alt={story.title}
                          width={150}
                          height={100}
                        />
                        <div>
                        <h2>{story.title}</h2>
                        <h3>Lượt xem:{story.follow}</h3>
                        </div>
                      </div>
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
export default Favourite;
