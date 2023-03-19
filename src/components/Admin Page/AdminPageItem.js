import styles from "./styles/admin.module.css";

const AdminPageItem = ({
    firstName,
    lastName,
    email
}) => {
    return (
        <article className={styles["user-card"]}>
            <h1 className={styles["user-heading"]}>{firstName} {lastName}</h1>
            <p className={styles["user-email"]}>{email}</p>
            <button className={styles["block-btn"]}>Block user</button>
            <button className={styles["delete-btn"]}>Delete user</button>
        </article>
    );
}

export default AdminPageItem;