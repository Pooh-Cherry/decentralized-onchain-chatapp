import React, { useState } from "react";
import styles from "./Profile.module.css";
import avatar from "../../assets/images/temp_avatar.png";

const Profile = () => {
  const [isOnline, setIsOnline] = useState(true); // State to track user's status

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>MY PROFILE</h1>
        <span className={`material-symbols-rounded ${styles.icon}`}>
          more_vert
        </span>
      </div>
      <div className={styles.avatar_status}>
        <img src={avatar} alt="User Avatar" />
        <span className={styles.user_name}>John Smith</span>
        <div className={styles.user_status}>
          <span
            className={`material-symbols-rounded ${
              isOnline ? styles.icon_online : styles.icon_offline
            }`}
          >
            circle
          </span>
          <label>{isOnline ? "Online" : "Offline"}</label>
        </div>
      </div>
			<div className={styles.user_info}>
				<div className={styles.user_summery}>
					<p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
				</div>
				<div className={styles.user_about}>
					<span>About</span>
					<label>Name</label>
					<p>John Smith</p>
					<label>E-mail</label>
					<p>abc@123.com</p>
				</div>
				<div className={styles.connect_wallet}>
					<button>Connect Wallet</button>
				</div>
			</div>
    </div>
  );
};

export default Profile;
