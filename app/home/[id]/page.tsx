"use client";
import Header from "@/app/header/page";
import storiesData from "../../Mock/stories";
import styles from "@/app/styles/home.module.css";
import Link from "@/node_modules/next/link";
import { useState } from "react";
import StoryInformation from "./StoryInformation/page";
import Chapters from "./Chapters/page";
import Description from "./Description/page";
import Comments from "./Comment/page";
import StoryGenre from "../storygenre/page";
import HistoryStory from "../historyStory/page";

const StoryPage = ({ params }: { params: { id: String } }) => {
  const selectedStory = storiesData.find((story:any) => story.id.toString() === params.id);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(selectedStory?.comment ?? []);
  const [commentCount, setCommentCount] = useState(selectedStory?.comment?.length || 0);

  const handleAddComment = () => {
    const newCommentObject = {
      iduser: comments.length + 1,
      userName: "You",
      userComment: newComment,
      avatar: "https://tse1.mm.bing.net/th?id=OIP.bq8ahErktvpu62_xf0aMwAHaHa&pid=Api&P=0&h=180",
    };
    const updatedComments = [...comments, newCommentObject];
    setComments(updatedComments);
    setCommentCount(updatedComments.length);
    setNewComment("");
  };
  if (!selectedStory) {
    return <div>Truyện không tồn tại.</div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>
        <p className={styles.truyen}><picture><img src="/icons/home.png" width={"18px"} alt="" /></picture> <Link href={`/home`}>Truyện</Link></p>/<p><Link href={`/home/${selectedStory.id}`}>{selectedStory.title}</Link></p>
      </div>
      <div className={styles.list}>
        <div className={styles.card}>
          <h1>{selectedStory.title}</h1>
          <div className={styles.author}>
            <p className={styles.date}>Ngày đăng: {selectedStory.datePosted}</p>
          </div>
          <StoryInformation selectedStory={selectedStory}/>
          <div className={styles.contentChapter}>
            <Chapters selectedStory={selectedStory} />
            <Description description={selectedStory.description} />
            <Comments
              commentCount={commentCount}
              newComment={newComment}
              comments={comments}
              handleAddComment={handleAddComment}
              setNewComment={setNewComment}/>
          </div>
        </div>
        <div className={styles.cardRight}>
         <StoryGenre/>
          <HistoryStory/>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
