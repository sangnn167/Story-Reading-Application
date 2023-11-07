"use client";
import React, {  useMemo } from "react";
import Link from "@/node_modules/next/link";
import storiesData from "../data/stories";
import styles from "@/app/styles/trangchu.module.css";
import Image from "@/node_modules/next/image";
import { useSelector,useDispatch } from "@/node_modules/react-redux/es/exports";
import { setSearchTerm } from "../store/slice/readstories";

const Home = () => {
  const searchTerm = useSelector((state:any) => state.stories.searchTerm);
  const dispatch = useDispatch();

  const filteredStories = useMemo(() => {
    return storiesData.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.containerlist}>
        <div className={styles.search}>
          <div className={styles.inputsearch}>
            <input
              type="search"
              placeholder="Tìm kiếm"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </div>
        </div>

        <div className={styles.list}>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
