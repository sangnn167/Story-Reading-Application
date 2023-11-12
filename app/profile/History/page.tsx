"use client";
import storiesData from "../../Data/stories";
import styles from "@/app/styles/profile.module.css";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";

const History = () => {
    const HistoryStories = storiesData.filter((story) => story.history);
    return (
        <div className={styles.tab1}>
            <div className={styles.list}>
                <ul>
                    {HistoryStories.map((story) => (
                        <li key={story.id}>
                            <div className={styles.storyContainer}>
                                <Image
                                    src="https://vnkings.com/wp-content/uploads/2017/06/19665128_278555815952158_3528244146282740007_n-copy.jpg"
                                    alt={story.title}
                                    width={230}
                                    height={180}
                                />
                                <div className={styles.textContainer}>
                                    <div className={styles.follow}>
                                        <picture><img src="/icons/eyee.png" alt="" /></picture>
                                        {story.follow}
                                    </div>
                                </div>
                                <div className={styles.textContainerr}>
                                        <div className={styles.followw}>
                                            {story.category}
                                        </div>
                                    </div>
                            </div>
                            <Link href={`/Home/${story.id}`}>
                                <div className={styles.title}>{story.title}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default History;
