"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import storiesData from "../data/stories";
import styles from "@/app/styles/trangchu.module.css";
import Image from "next/image";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <ul>
              {filteredStories.length > 0
                ? filteredStories.map((story) => (
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
                  ))
                : storiesData.map((story) => (
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
