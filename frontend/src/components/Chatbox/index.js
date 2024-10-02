import React from "react";
import styles from "./Chatbox.module.css";

const Chatbox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chatbox_conatiner}>
        <div className={styles.header}>
          <div className={styles.account_info}>
            <div className={styles.avatar}>
              <span className={`material-symbols-rounded ${styles.icon}`}>
                account_circle
              </span>
            </div>
            <div className={styles.name_wallet}>
              <span>Maria</span>
              <p>TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjKTy</p>
            </div>
          </div>
          <div className={styles.more_actions}>
            <div className={styles.more_actions_container}>
              <span className={`material-symbols-rounded ${styles.icon}`}>
                search
              </span>
              <span className={`material-symbols-rounded ${styles.icon}`}>
                wallet
              </span>
              <span className={`material-symbols-rounded ${styles.icon}`}>
                person
              </span>
              <span className={`material-symbols-rounded ${styles.icon}`}>
                more_horiz
              </span>
            </div>
          </div>
        </div>
        <div className={styles.chat_content}>asdf</div>
        <div className={styles.footer}>
          <div className={styles.chat_input}>
            <textarea
              name="chat"
              placeholder="Enter your message"
              rows="0"
              cols="100"
            ></textarea>
          </div>
          <civ className={styles.chat_actions}>
            <span className={`material-symbols-rounded ${styles.icon}`}>
              sentiment_satisfied
            </span>
            <span className={`material-symbols-rounded ${styles.icon}`}>
              attach_file
            </span>
            <span className={`material-symbols-rounded ${styles.icon}`}>
              send
            </span>
          </civ>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
