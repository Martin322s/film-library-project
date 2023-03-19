import styles from "./styles/admin.module.css";

const AdminPageItem = ({
    _id,
    firstName,
    lastName,
    email,
    accessToken,
    onDelete,
    onUpdate
}) => {
    return (
        <article className={styles["user-card"]}>
            <h1 className={styles["user-heading"]}>{firstName} {lastName}</h1>
            <p className={styles["user-email"]}>{email}</p>
            <button className={styles["block-btn"]} onClick={() => onUpdate(_id, )}>Block user</button>
            <button onClick={() => onDelete(_id, accessToken)}className={styles["delete-btn"]}>Delete user</button>
        </article>
    );
}

export default AdminPageItem;