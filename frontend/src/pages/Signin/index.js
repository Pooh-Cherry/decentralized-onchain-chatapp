import React from "react";
import { Link } from "react-router-dom";
import styles from "./Siginin.module.css";
import logo from "../../assets/images/logo.svg";

const Signin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} />
        <h1>CHATCHAIN</h1>
      </div>
      <div className={styles.header}>
        <span>Welcome Back!</span>
        <p>It is ON-CHAIN and DECENTRALIZED!</p>
      </div>
      <div className={styles.form}>
        <div className={styles.form_container}>
          <div className={styles.form_input}>
            <p>Password</p>
            <div className={styles.form_input_tag}>
              <div className={styles.form_input_icon}>
                <span
                  className={`material-symbols-rounded ${styles.form_input_icon_span}`}
                >
                  lock
                </span>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className={styles.form_login}>
            <button>Log In</button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_signup}>
          Don't you have an account?{" "}
          <Link to="/signup">Generate new wallet or import wallet</Link>
        </div>
        <div className={styles.footer_copyright}>© 2024 Chainchat.</div>
      </div>
    </div>
  );
};

export default Signin;
