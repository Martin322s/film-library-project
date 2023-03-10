import styles from "../Common/Header/styles/navigation.module.css";

const Search = () => {
    return (
        <li className={styles["nav-item-search"]}>
            <input type="text" placeholder="Search" />
            <button className={styles["btn-search"]}><i className="fas fa-search"></i>Search</button>
        </li>
    );
}

export default Search;