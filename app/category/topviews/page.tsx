import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/categoryy.module.css";
import { FaEye} from "react-icons/fa";
const TopViews = ({ stories }: any) => {
  return (
    <div className={styles.itemRight}>
      <h1>Top lượt xem</h1>
      <div className={styles.lineee}>
        <div className={styles.lineeeee}></div>
        <div className={styles.linee}></div>
      </div>
      <div className={styles.itemlist}>
        <div className={styles.listcard}>
          <ul>
            {stories.sort((a: any, b: any) => b.follow - a.follow).map((story: any) => (
                <li key={story.id}>
                  <div className={styles.item}>
                    <div className={styles.img}>
                      <Image
                        src={story.img}
                        alt={story.title}
                        width={320}
                        height={150}
                      />
                    </div>
                    <Link href={`/home/${story.id}`}>
                      <div className={styles.overlay}>
                        <div>{story.title}</div>
                        <div className={styles.eye}>
                        <FaEye/>{" "}
                          {story.follow}
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
  );
};

export default TopViews;
