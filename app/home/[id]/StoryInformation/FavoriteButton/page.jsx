import React, { useState } from "react";
import styles from "@/app/styles/home.module.css";
import { FaHeart } from "react-icons/fa6";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className={styles.buttonTim}
      onClick={handleClick}
      style={{
        backgroundColor: isFavorite ? "rgb(246, 177, 50)" : "gray",
        color: isFavorite ? "red" : "white",
      }}
    >
      <FaHeart /> {isFavorite ? "Đã thích" : "Yêu thích"}
    </button>
  );
};

export default FavoriteButton;
