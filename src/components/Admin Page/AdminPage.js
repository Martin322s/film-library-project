import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles/admin.module.css";

const AdminPage = () => {
    const { user } = useContext(AuthContext);
    return (
        <section>
            <h1 className={styles["welcome-user"]}>Full Name: {`${user.firstName} ${user.lastName}`}</h1>
            <h1 className={styles["welcome-user-email"]}>Email: {user.email}</h1>

            <article className={styles["user-publications"]}>
                {/* eslint-disable-next-line */}
                <ul className={styles["created-publications"]} role={"list"}>
                    <h3 className={styles["headings"]}>Registered users:</h3>
                </ul>
                {/* eslint-disable-next-line */}
                <ul className={styles["shared-publications"]} role={"list"}>
                    <h3 className={styles["headings"]}>Created publications:</h3>
                </ul>
            </article>
        </section>
    );
}

export default AdminPage;