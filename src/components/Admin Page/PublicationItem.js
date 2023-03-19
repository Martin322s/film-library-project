import styles from "./styles/admin.module.css";

const AdminPublication = ({
    title,
    imageUrl
}) => {
    return (
        <article className={styles["film-card"]}>
            <img className={styles["film-card-img"]} src={imageUrl} alt={title} />
            <h2 className={styles["film-heading-title"]}>{title}</h2>
            <button className={styles["link-details-btn"]}>Delete Publication</button>
        </article>
    );
}

export default AdminPublication;