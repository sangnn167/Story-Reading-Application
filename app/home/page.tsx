"use client";
import React, { useEffect } from "react";
import Link from "@/node_modules/next/link";
import storiesData from "../data/stories";
import styles from "@/app/styles/trangchu.module.css";
import Image from "@/node_modules/next/image";
import { useSelector, useDispatch, } from "@/node_modules/react-redux/es/exports";
import { setFilteredStories, setLoading} from "../store/slice/readstories";
import NewStory from "./newstory/page";
import SearchFilter from "./searchfilter/page";

const Home = () => {
  const dispatch = useDispatch();
  const { selectedCategory, filteredStories,searchKeyword,loading} = useSelector((state: any) => state.stories);
  
  useEffect(() => {
    const updatedStories = storiesData
      .filter((story) => {
        const categoryFilter =
          !(selectedCategory !== "1" && story.category !== (selectedCategory !== "2" ? "Cổ tích" : "Giải trí"))
        const searchFilter = story.title.toLowerCase().includes(searchKeyword.toLowerCase());
        return categoryFilter && searchFilter;
      })
      .slice(0, 8);
  
    if (updatedStories.length === 0 && selectedCategory.includes("1")) {
      const storiesWithSelectedCategory = storiesData.filter((story) => story.category.includes("1"));
      dispatch(setFilteredStories(storiesWithSelectedCategory));
    } else {
      dispatch(setFilteredStories(updatedStories));
    }
    dispatch(setLoading(false));
  }, [selectedCategory, searchKeyword, dispatch]);
  

  return (
    <div className={styles.container}>
      <div className={styles.containerlist}>
        <SearchFilter />
        <div className={styles.list}>
          <div className={styles.item}>
            {loading ? (
              <p>Loading...</p>
            ) : filteredStories.length > 0 ? (
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
