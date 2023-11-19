"use client";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/profile.module.css";
import Link from "@/node_modules/next/link";
import { FaEye,FaHeart,FaComment} from "react-icons/fa";

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

                                        <div className={styles.icon}><FaEye/>{story.follow}</div> <div className={styles.icon}><FaHeart/>{story.favorites}</div> <div className={styles.icon}><FaComment />{story.comment.length}</div>
                                        </div>
                                    </div>    
                                </div>
                                <Link href={`/home/${story.id}`}>
                                    <div className={styles.title}>{story.title}</div>
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