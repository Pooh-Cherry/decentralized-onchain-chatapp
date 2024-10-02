import React, { useContext } from "react";
import styles from "./Profile.module.css";
import avatar from "../../assets/images/temp_avatar.png"
import { UserContext } from "../../utils/UserContext"; // Import context

const Profile = () => {
  const { userInfo } = useContext(UserContext); // Get user info from context

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>MY PROFILE</h1>
        <span className={`material-symbols-rounded ${styles.icon}`}>
          more_vert
        </span>
      </div>
      <div className={styles.avatar_status}>
        <img src={userInfo.avatar || avatar} alt="User Avatar" />
        <span className={styles.user_name}>{userInfo.name}</span>
        <div className={styles.user_status}>
          <span className={`material-symbols-rounded ${styles.icon_online}`}>circle</span>
          <label>Online</label>
        </div>
      </div>
      <div className={styles.user_info}>
        <div className={styles.user_summery}>
          <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
        </div>
        <div className={styles.user_about}>
          <span>About</span>
          <label>Name</label>
          <p>{userInfo.name}</p>
          <label>E-mail</label>
          <p>{userInfo.email}</p>
        </div>
        <div className={styles.connect_wallet}>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
