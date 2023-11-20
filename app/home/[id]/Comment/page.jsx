import React from "react";
import Button from "@/app/Common/Button/page";
import styles from "@/app/styles/home.module.css";

const Comments = ({ commentCount, newComment, comments, handleAddComment,setNewComment  }) => {
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
  );
};

export default Comments;
