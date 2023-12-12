import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState([]);
  const [feedbackText, setFeedbackText] = useState("");
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputText.trim() === "") {
      return;
    }

    setDisplayedText([...displayedText, inputText]);
    setInputText("");
    setTimeout(() => {
      setFeedbackText("Chúng tôi sẽ phản hồi ngay sau ít phút.");
    }, 2000);
  };

  return (
    <div className={styles.ChatContainer}>
      {showChat && (
        <div className={styles.container}>
          <div className={styles.titleChat}>Messenger</div>
          <div className={styles.content}>
            <ul>
              {displayedText.map((text, index) => (
                <li key={index}>
                  <FaUserCircle size={"15px"} className={styles.abc} />
                  <div className={styles.textChat}>{text}</div>
                </li>
              ))}
            </ul>
            {feedbackText && (
              <div>
                <FaUserCircle size={"15px"} className={styles.abcc} />
                <div className={styles.feedback}>{feedbackText}</div>
              </div>
            )}
          </div>
          <div className={styles.inputChat}>
            <input type="text" value={inputText} onChange={handleInputChange} />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleButtonClick}>
              <LuSendHorizonal size={"20px"} />
            </button>
          </div>
        </div>
      )}
      <IoChatbubbleEllipses
        size={"80px"}
        className={styles.icon}
        onClick={toggleChat}
      />
    </div>
  );
};

export default Chat;
