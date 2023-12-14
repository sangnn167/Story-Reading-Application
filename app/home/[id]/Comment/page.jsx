import React, { useState,useRef, useEffect } from "react";
import Button from "@/app/Common/Button/page";
import styles from "@/app/styles/home.module.css";
import Picker from "@emoji-mart/react";
import { MdInsertEmoticon } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

const Comments = ({commentCount,newComment,setNewComment,showPicker,setShowPicker,data,addEmoji,handleAddComment,comments,}) => {
  const [commentStatus, setCommentStatus] = useState({});
  const handleClick = (iduser) => {
    const updatedStatus = { ...commentStatus };
    if (updatedStatus[iduser]) {
      delete updatedStatus[iduser];
    } else {
      updatedStatus[iduser] = true;
    }
    setCommentStatus(updatedStatus);
  };
  return (
    <div className={styles.containerdescription}>
      <div className={styles.inline}></div>
      <div className={styles.comment}>
        <p>
          <strong>{commentCount.toString()} comments</strong>
        </p>
        <div className={styles.inputcomment}>
          <input
            className={styles.input}
            placeholder="Add a comment..."
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div style={{ position: "relative", marginRight: "5px" }}>
            <Button onClick={() => setShowPicker(!showPicker)}>
              <MdInsertEmoticon size={"24px"} />
            </Button>
            <div
              style={{
                position: "absolute",
                top: "50px",
                right: 0,
                display: showPicker ? "block" : "none",
              }}
            >
              <Picker data={data} onEmojiSelect={(e) => { //hoặc có thể viết là onEmojiSelect={addEmoji} => nếu viết như này thì không ẩn showPicker sau khi chọn icon
                addEmoji(e);
                setShowPicker(!showPicker); // cái này để ẩn showPicker sau khi chọn icon
              }} /> 
            </div>
          </div>

          <Button onClick={handleAddComment}>Post</Button>
        </div>
        <div>
          {(comments.length > 0 && (
            <div className={styles.comments}>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.iduser}>
                    <div className={styles.itemcomment}>
                      <div>
                        <picture>
                          <img
                            src={comment.avatar}
                            alt=""
                            width={"65px"}
                            height={"65px"}
                          />
                        </picture>
                      </div>
                      <div className={styles.titlecomment}>
                        <strong>{comment.userName}</strong>
                        <div>{comment.userComment}</div>
                        <div className={styles.LikeContainer}>
                          <div className={styles.timeCommnet}>
                            {comment.commentTime}
                          </div>
                          <div
                            className={styles.textlike}
                            onClick={() => handleClick(comment.iduser)}
                            style={{
                              color: commentStatus[comment.iduser]
                                ? "blue"
                                : "black",
                            }}
                          >
                            {commentStatus[comment.iduser] ? (
                              <div className={styles.LikeComment}>
                                Unlike{" "}
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <BiSolidLike size={"15px"} />1
                                </div>
                              </div>
                            ) : (
                              "Like"
                            )}
                          </div>
                        </div>
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
  );
};

export default Comments;
