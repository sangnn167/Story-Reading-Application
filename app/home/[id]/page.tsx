"use client";
import storiesData from "../../data/stories";
import styles from "@/app/styles/home.module.css";
import Image from "next/image";
import Link from "next/link";

const StoryPage = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  const selectedStory = storiesData.find((story) => story.id.toString() === id);

  if (!selectedStory) {
    return <div>Truyện không tồn tại.</div>;
  }
  const isFavourite = selectedStory.favourite;
  const buttonContent = isFavourite ? "Đã yêu thích" : "Yêu thích";
  const buttonColor = isFavourite ? "red" : "gray";

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.card}>
          <h1>{selectedStory.title}</h1>
          <div className={styles.img}>
            <Image
              src="https://vnkings.com/wp-content/uploads/2017/06/19665128_278555815952158_3528244146282740007_n-copy.jpg"
              alt="story.title"
              width={250}
              height={200}
            />
            <div className={styles.thongtin}>
              <div className={styles.author}>
                <p>Tác giả:</p> <p>{selectedStory.author}</p>
              </div>
              <div className={styles.author}>
                <p>Thể loại</p> <p>{selectedStory.category}</p>
              </div>
              <div className={styles.author}>
                <p>Tình trạng:</p> <p>{selectedStory.status}</p>
              </div>
              
              <div className={styles.author}>
                <p className={styles.date}>
                  Ngày đăng: {selectedStory.datePosted}
                </p>
              </div>
              <button style={{ background: buttonColor,borderRadius: "5px",padding: "3px",color: "#ffffff" }}>{buttonContent}</button>
            </div>
          </div>
          <div className={styles.chapter}>
            {selectedStory.chapters && selectedStory.chapters.length > 0 && (
              <div className={styles.chapterr}>
                <ul>
                  {selectedStory.chapters.map((chapter, index) => (
                    <li key={index}>
                      <Link
                        href={`/home/${selectedStory.id}/${chapter.chapterNumber}`}
                      >
                        <div className={styles.item}>
                          <strong>
                            Chapter {chapter.chapterNumber}:{" "}
                            {chapter.chapterTitle}
                          </strong>
                          <p style={{ color: "gray", fontSize: "14px" }}>
                            {chapter.chapterDatePosted}
                            {"⮞"}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.containerdescription}>
              <div className={styles.inline}></div>

              <div className={styles.description}>
                <p>
                  <strong>Mô tả:</strong> {selectedStory.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
