"use client";
import React, { useEffect } from "react";
import storiesData from "../Mock/stories";
import styles from "@/app/styles/trangchu.module.css";
import { useSelector, useDispatch, } from "@/node_modules/react-redux/es/exports";
import { setFilteredStories } from "../store/slice/readstories";
import SearchFilter from "@/app/home/searchfilter/page";
import NewStory from "@/app/home/newstory/page";
import Header from "../header/page";
import ListStory from "./liststory/page"
import MySlider from "./slider/page"
import HistoryStory from "./historyStory/page"
import StoryGenre from "./storygenre/page"
import { FcNext } from "react-icons/fc";


const Home = () => {
  const dispatch = useDispatch();
  const { searchKeyword } = useSelector((state: any) => state.stories);

  useEffect(() => {
    const updatedStories = storiesData
      .filter((story) => {
        const searchFilter = story.title.toLowerCase().includes(searchKeyword.toLowerCase());
        return searchFilter;
      })
      .slice(0, 8);

    dispatch(setFilteredStories(updatedStories));
  }, [searchKeyword, dispatch]);


  return (
    <div className={styles.container}>
     
      <Header />
      <div className={styles.headerr}>
        <p>Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục.</p>
      </div>
      <div className={styles.slider}>
        <div className={styles.title}>
          <p >
            Truyện đề cử <FcNext />
          </p>
        </div>
        <MySlider />
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerLeft}>
          <SearchFilter />
          <ListStory />
          <div className={styles.newStoryUpdate}>
            <div className={styles.itemStoryUpdate}>
              <h1>Truyện mới cập nhật <FcNext /></h1>
              <div className={styles.inline}></div>
              <NewStory />
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
          <StoryGenre />
          <div className={styles.containerHistoryStory}>
          <HistoryStory />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
