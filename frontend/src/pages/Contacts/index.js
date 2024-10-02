import React, { useState } from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const [searchText, setSearchText] = useState("");

  const contactsList = [
    {
      name: "Albert Rodarte",
      wallet: "0x11b4017cd90c347f3c1c7a1ffc3925e0e27f2748"
    },
    { name: "Asigner", wallet: "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjKTy" },
    { name: "General", wallet: "JKRTs9Qb1rRpS5CbWLmNMxXBjyFoydX372" },
    { name: "Reporting", wallet: "KSHtwKs9Qb1rRpS5CbWLmNMxXBjyFzXR32" }
  ];

  const filteredContacts = contactsList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.wallet.toLowerCase().includes(searchText.toLowerCase())
  );

  const groupByInitial = (contacts) => {
    return contacts.reduce((grouped, contact) => {
      const initial = contact.name.charAt(0).toUpperCase();
      if (!grouped[initial]) {
        grouped[initial] = [];
      }
      grouped[initial].push(contact);
      return grouped;
    }, {});
  };

  const groupedContacts = groupByInitial(filteredContacts);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>CONTACTS</h1>
        <span className={`material-symbols-rounded ${styles.icon_active}`}>
          person_add
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
            placeholder="Search Contacts"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <ul className={styles.contacts_list}>
        {Object.keys(groupedContacts).length > 0 ? (
          Object.keys(groupedContacts).map((initial, index) => (
            <li key={index} className={styles.contact_group}>
              <h3>{initial}</h3>
              <ul>
                {groupedContacts[initial].map((contact, idx) => (
                  <li key={idx} className={styles.contact_item}>
                    <div className={styles.name_wallet}>
                      <span>{contact.name}</span>
                      <p>{contact.wallet}</p>
                    </div>
                    <div className={styles.more_actions}>
                      <span
                        className={`material-symbols-rounded ${styles.icon}`}
                      >
                        wallet
                      </span>
                      <span
                        className={`material-symbols-rounded ${styles.icon}`}
                      >
                        more_vert
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li className={styles.contact_item}>No contacts found</li>
        )}
      </ul>
    </div>
  );
};

export default Contacts;
