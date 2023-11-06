"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/profile.module.css";
import Link from "next/link";
import Image from "next/image";

const Follow = () => {
  const filteredStories = storiesData.filter((story) => story.author === "Nam");

  return (
    <div className={styles.container}>
      <div className={styles.containerlist}>
        <div className={styles.list}>
          <div className={styles.headertop}>
            <div className={styles.itemtop}>
              <Link href="/profile">
                <h1>Truyện</h1>
              </Link>
            </div>
            <div className={styles.inlice}></div>
            <div className={styles.itemtop}>
              <Link href="/profile/favourite">
                
                <h1>Yêu thích</h1>
              </Link>
            </div>
            <div className={styles.inlice}></div>
            <div className={styles.itemtop}>
              <h1>Đang theo dõi</h1>
            </div>
          </div>

          <div className={styles.item}>
            <h1>Tên tác giả:{filteredStories.length > 0 && filteredStories[0].author}</h1>
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
                        <h2>{story.title}</h2>
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
export default Follow;
