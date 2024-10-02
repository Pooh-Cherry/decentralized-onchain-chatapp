import React from "react";
import { Link } from "react-router-dom";
import styles from "./Siginup.module.css"
import logo from "../../assets/images/logo.svg"

const Signup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} />
                <h1>CHATCHAIN</h1>
            </div>
            <div className={styles.header}>
                <span>Register!</span>
                <p>Welcome to the first onchain decentralized chat app.</p>
            </div>
            <div className={styles.form}>
                <div className={styles.form_container}>
                    <div className={styles.form_button}>
                        <button>Import Wallet</button>
                    </div>
                    <div className={styles.form_or}>Or</div>
                    <div className={styles.form_button}>
                        <button>Generate New Wallet</button>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footer_copyright}>© 2024 Chainchat.</div>
            </div>
        </div>
    )
}

export default Signup;
