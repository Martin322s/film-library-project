import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Common/Header/styles/navigation.module.css";

const Search = () => {
    const [criteria, setCriteria] = useState("");

    const chnageHandler = (ev) => {
        setCriteria(ev.target.value);
    }

    return (
        <li className={styles["nav-item-search"]}>
            <input
                type="text"
                placeholder="Search"
                value={criteria}
                onChange={(ev) => chnageHandler(ev)}
            />
            <Link to={`/search/${criteria}`} className={styles["btn-search"]}><i className="fas fa-search"></i>Search</Link>
        </li>
    );
}

export default Search;