"use client";
import React, { useEffect } from "react";
import Link from "@/node_modules/next/link";
import storiesData from "../data/stories";
import styles from "@/app/styles/trangchu.module.css";
import Image from "@/node_modules/next/image";
import {useSelector,useDispatch,} from "@/node_modules/react-redux/es/exports";
import Form from "react-bootstrap/Form";
import {setFilteredStories,setSelectedCategory} from "../store/slice/readstories";
import NewStory from "./newstory/page";

const Home = () => {
  const dispatch = useDispatch();
  const { selectedCategory, filteredStories } = useSelector(
    (state: any) => state.stories
  );

  useEffect(() => {
    const updatedStories = storiesData
      .filter((story) => {
        if (selectedCategory === "1") {
          return true;
        } else {
          return (
            story.category ===
            (selectedCategory === "2" ? "Cổ tích" : "Giải trí")
          );
        }
      })
      .slice(0, 8);
    dispatch(setFilteredStories(updatedStories));
  }, [selectedCategory, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.containerlist}>
        <div className={styles.dropdown}>
          <Form.Select
            className={styles.customselect}
            aria-label="Default select example"
            value={selectedCategory}
            onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
          >
            <option value="1">Tất cả</option>
            <option value="2">Cổ tích</option>
            <option value="3">Giải trí</option>
          </Form.Select>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <ul>
              {filteredStories.map((story: any) => (
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
