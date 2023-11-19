import React from "react";
import styles from "@/app/styles/home.module.css";
import { FaUser } from "react-icons/fa6";
import { BsTagsFill } from "react-icons/bs";
import { GrRss } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { LiaSortAmountUpAltSolid } from "react-icons/lia";
const StoryDetails = ({ selectedStory }) => {
  return (
    <div>
      <div className={styles.author}>
      <p><FaUser />Tác giả:</p> <p>{selectedStory.author}</p>
      </div>
      <div className={styles.author}>
        <p><BsTagsFill />Thể loại</p> <p>{selectedStory.category}</p>
      </div>
      <div className={styles.author}>
        <p><GrRss />Trạng thái:</p> <p>{selectedStory.status}</p>
      </div>
      <div className={styles.author}>
        <p><FaEye/>Lượt xem:</p> <p>{selectedStory.follow}</p>
      </div>
      <div className={styles.author}>
        <p><LiaSortAmountUpAltSolid />Xếp hạng:</p>{" "}
        <p>
          {selectedStory.Ratings} - {selectedStory.Numberofreviews} lượt đánh giá
        </p>
      </div>
    </div>
  );
};

export default StoryDetails;
