import React, { useState } from "react";
import styles from "./Settings.module.css";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Smith",
    email: "abc@123.com",
    time: "11:40 AM",
    location: "California, US",
    avatar: null // New state for avatar
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo({
          ...userInfo,
          avatar: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>SETTINGS</h1>
        <span className={`material-symbols-rounded ${styles.icon}`}>
          more_vert
        </span>
      </div>
      <div className={styles.avatar_status}>
        <label htmlFor="avatarInput" className={styles.avatarLabel}>
          {userInfo.avatar ? (
            <img src={userInfo.avatar} alt="Avatar" className={styles.avatarImage} />
          ) : (
            <span className={`material-symbols-rounded ${styles.icon}`}>
              manage_accounts
            </span>
          )}
        </label>
        <input
          type="file"
          id="avatarInput"
          style={{ display: "none" }}
          onChange={handleAvatarUpload}
          accept="image/*"
        />
        <span className={styles.user_name}>{userInfo.name}</span>
      </div>
      <div className={styles.user_info}>
        <div className={styles.user_about}>
          <span>Personal Info</span>
          <label>Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          ) : (
            <p>{userInfo.name}</p>
          )}
          <label>E-mail</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          ) : (
            <p>{userInfo.email}</p>
          )}
          <label>Time</label>
          {isEditing ? (
            <input
              type="time"
              name="time"
              value={userInfo.time}
              onChange={handleChange}
            />
          ) : (
            <p>{userInfo.time}</p>
          )}
          <label>Location</label>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={userInfo.location}
              onChange={handleChange}
            />
          ) : (
            <p>{userInfo.location}</p>
          )}
        </div>
        <div className={styles.edit_info}>
          <button onClick={handleEditToggle}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
