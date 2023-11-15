"use client";
import React, { useEffect } from "react";
import Link from "@/node_modules/next/link";
import storiesData from "../data/stories";
import styles from "@/app/styles/trangchu.module.css";
import { useSelector, useDispatch, } from "@/node_modules/react-redux/es/exports";
import { setFilteredStories } from "../store/slice/readstories";
import SearchFilter from "@/app/home/searchfilter/page";
import NewStory from "@/app/home/newstory/page";
import Header from "../header/page";

const Home = () => {
  const dispatch = useDispatch();
  const { selectedCategory, filteredStories, searchKeyword } = useSelector((state: any) => state.stories);

  useEffect(() => {
    const updatedStories = storiesData
      .filter((story) => {
        const categoryFilter =
        !(selectedCategory != "1" && story.category != (selectedCategory != "2" ? "Cổ tích" : "Giải trí"))
        const searchFilter = story.title.toLowerCase().includes(searchKeyword.toLowerCase());
        return categoryFilter && searchFilter;
      })
      .slice(0, 8);
    dispatch(setFilteredStories(updatedStories));
  }, [selectedCategory, searchKeyword, dispatch]);


  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.headerr}>
          <p>Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục.</p>
      </div>
      <div className={styles.containerlist}>
        <SearchFilter />
        <div className={styles.list}>
          <div className={styles.item}>
            {filteredStories.length > 0 ? (
              <ul>
                {filteredStories.map((story: any) => (
                  <li key={story.id}>
                    <div className={styles.card}>
                      <picture>
                      <img
                        src={story.imgUrl}
                        alt={story.title}
                        style={{ width: "230px", height: "300px" }}
                      />
                      </picture>
                      <Link href={`/home/${story.id}`}>
                        <h2>{story.title}</h2>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Truyện không tồn tại.</p>
            )}
          </div>
        </div>
        <div className={styles.newStoryUpdate}>
          <div className={styles.itemStoryUpdate}>
            <h1>TRUYỆN MỚI CẬP NHẬT</h1>
            <div className={styles.inline}></div>
            <NewStory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
