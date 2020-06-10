import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <nav className={styles.nav}>
                <h1 className={styles.navHeading}>
                    <span className={styles.navHeadingPrimary}>Pokemon</span>{" "}
                    catalog
                </h1>
                <div className={styles.navInput}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search pokemon"
                        className={styles.navInputItem}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
