"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/profile.module.css";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";

const History = () => {
    const HistoryStories = storiesData.filter((story) => story.history);
    return (
        <div className={styles.tab1}>
            <div className={styles.list}>
                <ul>
                    {
                        HistoryStories.map((story) => (
                            <li key={story.id}>
                                <div className={styles.storyContainer}>
                                    <picture>
                                        <img
                                            src={story.imgUrl}
                                            alt={story.title}
                                            style={{ width: "230px", height: "300px" }}
                                        />
                                    </picture>
                                    <div className={styles.textContainer}>
                                        <div className={styles.follow}>
                                            <picture><img src="/icons/eyee.png" alt="" /></picture>{story.follow}
                                        </div>
                                    </div>
                                    <div className={styles.textContainerr}>
                                        <div className={styles.followw}>
                                            {story.category}
                                        </div>
                                    </div>
                                </div>
                                <Link href={`/home/${story.id}`}>
                                    <div className={styles.title}> {story.title}</div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default History;