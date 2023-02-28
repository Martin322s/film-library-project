import { Link } from "react-router-dom";
import styles from "./styles/navigation.module.css";
import logo from "./images/logo.png";

const Header = () => {
    return (
        // eslint-disable-next-line
        <header className={styles["heading"]}>
        {/* eslint-disable-next-line */}
            <ul className={styles["heading__navbar"]} role={"list"}>
                <li className={styles["nav-item-logo"]}>
                    <img src={logo} alt="logo" />
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/catalog">Catalog</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/profile">Profile</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/create">Create</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/login">Sign In</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/register">Sign Up</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link to="/">Logout</Link>
                </li>
                <li className={styles["nav-item-search"]}>
                    <input type="text" placeholder="Search" />
                    <i className="search fas fa-search" />
                    <button className={styles["btn-search"]}>Search</button>
                </li>
            </ul>
            <h1 className={styles["header_heading"]}>
                <i className="fas fa-film" />
                Welcome to Cinema City!
                <i className="fas fa-film" />
            </h1>
        </header>
    );
}

export default Header;