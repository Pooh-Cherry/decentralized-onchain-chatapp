import React, { useState } from "react";
import styles from "./Groups.module.css";

const Groups = () => {
  const [searchText, setSearchText] = useState("");
  const groupList = ["Designer", "General", "Reporting", "Team"];
  const filteredGroups = groupList.filter(group =>
    group.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>GROUPS</h1>
        <span className={`material-symbols-rounded ${styles.icon_active}`}>
          groups
        </span>
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
            placeholder="Search Groups"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <ul className={styles.group_list}>
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group, index) => (
            <li key={index} className={styles.group_item}>
              {group}
            </li>
          ))
        ) : (
          <li>No groups found</li>
        )}
      </ul>
    </div>
  );
};

export default Groups;
