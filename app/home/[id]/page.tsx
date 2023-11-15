"use client";
import Header from "@/app/header/page";
import storiesData from "../../data/stories";
import styles from "@/app/styles/home.module.css";
import Link from "@/node_modules/next/link";
import { useState } from "react";

const StoryPage = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  const selectedStory = storiesData.find((story) => story.id.toString() === id);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(selectedStory?.comment ?? []);

  if (!selectedStory) {
    return <div>Truyện không tồn tại.</div>;
  }
  const isFavourite = selectedStory.favourite;
  const buttonContent = isFavourite ? "Đã yêu thích" : "Yêu thích";
  const buttonColor = isFavourite ? "red" : "gray";

  const handleAddComment = () => {
    const newCommentObject = {
      iduser: comments.length + 1,
      userName: "Sáng", 
      userComment: newComment,
      avatar: "https://hinhnen123.com/wp-content/uploads/2021/06/avt-cute-8.jpg", 
    };
    setComments([...comments, newCommentObject]);
    setNewComment("");
  };
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>
        <p className={styles.truyen}><picture><img src="/icons/home.png" width={"18px"} alt="" /></picture> <Link href={`/home`}>Truyện</Link></p>/<p><Link href={`/home/${selectedStory.id}`}>{selectedStory.title}</Link></p>
      </div>
      <div className={styles.list}>
        <div className={styles.card}>
          <h1>{selectedStory.title}</h1>
          <div className={styles.img}>
            <div>
              <picture>
                <img
                  src={selectedStory.imgUrl}
                  alt={selectedStory.title}
                  style={{ width: "230px", height: "300px" }}
                />
              </picture>
            </div>
            <div>
              <div className={styles.thongtin}>
                <div className={styles.author}>
                  <p>Tác giả:</p> <p>{selectedStory.author}</p>
                </div>
                <div className={styles.author}>
                  <p>Thể loại</p> <p>{selectedStory.category}</p>
                </div>
                <div className={styles.author}>
                  <p>Trạng thái:</p> <p>{selectedStory.status}</p>
                </div>

                <div className={styles.author}>
                  <p className={styles.date}>
                    Ngày đăng: {selectedStory.datePosted}
                  </p>
                </div>
                <button
                  style={{
                    background: buttonColor,
                    borderRadius: "5px",
                    padding: "3px",
                    color: "#ffffff",
                  }}>
                  {buttonContent}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.chapter}>
            {selectedStory.chapters && selectedStory.chapters.length > 0 && (
              <div className={styles.chapterr}>
                <ul>
                  {selectedStory.chapters.map((chapter, index) => (
                    <li key={index}>
                      <Link
                        href={`/home/${selectedStory.id}/${chapter.chapterNumber}`}>
                        <div className={styles.item}>
                          <strong>
                            Chapter {chapter.chapterNumber}:{" "}
                            {chapter.chapterTitle}
                          </strong>
                          <p>
                            {chapter.chapterDatePosted}{"⮞"}
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
            <div className={styles.containerdescription}>
              <div className={styles.inline}></div>
              <div className={styles.comment}>
                <p>
                  <strong>{(selectedStory.comment?.length || 0).toString()} comments</strong>
                </p>
                <div className={styles.inputcomment}>
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button onClick={handleAddComment}>Save</button>
                </div>
                <div>
                  {(comments.length > 0 && (
                    <div className={styles.comments}>
                      <ul>
                        {comments.map((comment: any) => (
                          <li key={comment.iduser}>
                            <div className={styles.itemcomment}>
                              <div>
                                <picture>
                                  <img
                                    src={comment.avatar}
                                    alt=""
                                    width={"50px"}
                                    height={"50px"}
                                  />
                                </picture>
                              </div>
                              <div className={styles.titlecomment}>
                                <strong>{comment.userName}</strong>
                                {comment.userComment}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )) || <p>No comments yet.</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
