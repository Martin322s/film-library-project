import { Link } from "react-router-dom";
import styles from "./styles/footer.module.css";

const Footer = () => {
    return (
        <footer>
            <h1 className={styles["footer_heading"]}>Cinema City</h1>
            {/* eslint-disable-next-line */}
            <ul role={"list"}>
                <li>About us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Contacts</li>
            </ul>
            {/* eslint-disable-next-line */}
            <ul role={"list"}>
                <li>Follow us on</li>
                <li className={styles["footer-item"]}>
                    <Link
                        className={styles["footer-link"]} 
                        to="https://github.com/MaRtin322s"
                        target={"_blank"}
                    >
                        <i className="fab fa-github-square" />
                    </Link>
                </li>
                <li className={styles["footer-item"]}>
                    <Link
                        className={styles["footer-link"]} 
                        to="https://www.facebook.com/profile.php?id=100009733451214"
                        target={"_blank"}
                    >
                        <i className="fab fa-facebook-square" />
                    </Link>
                </li>
                <li className={styles["footer-item"]}>
                    <Link
                        className={styles["footer-link" ]}
                        to="https://www.instagram.com/martin13s18/"
                        target={"_blank"}
                    >
                        <i className="fab fa-instagram" />
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;