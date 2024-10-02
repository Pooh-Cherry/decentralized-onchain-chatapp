import React, { useState } from "react";
import styles from "./Messages.module.css";

const Messages = () => {
  const [searchText, setSearchText] = useState("");

  const messagesList = [
    { name: "Jon", last_chat: "Hey! how are you?", last_chat_date: "20min" },
    { name: "Alice", last_chat: "Meeting rescheduled.", last_chat_date: "2h" },
    {
      name: "Bob",
      last_chat: "Please review the document.",
      last_chat_date: "1d"
    },
    { name: "Charlie", last_chat: "Lunch at 1 PM?", last_chat_date: "5d" }
  ];

  const filteredMessages = messagesList.filter((message) =>
    message.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>MESSAGES</h1>
        {/* <span className={`material-symbols-rounded ${styles.icon_active}`}>
          groups
        </span> */}
      </div>
      <div className={styles.search_box}>
        <div className={styles.form_input_tag}>
          <div className={styles.form_input_icon}>
            <span
              className={`material-symbols-rounded ${styles.form_input_icon_span}`}
            >
              search
            </span>
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search Messages"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <ul className={styles.group_list}>
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message, index) => (
            <li key={index} className={styles.group_item}>
              <div className={styles.chatted_user}>
                <span
                  className={`material-symbols-rounded ${styles.icon}`}
                >
                  account_circle
                </span>
                <div className={styles.name_chathis}>
                  <span>{message.name}</span>
                  <p>{message.last_chat}</p>
                </div>
              </div>
              <div className={styles.last_chat_time}>
                <p>{message.last_chat_date}</p>
              </div>
            </li>
          ))
        ) : (
          <li>No messages found</li>
        )}
      </ul>
    </div>
  );
};

export default Messages;
