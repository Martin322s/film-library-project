import { Link } from "react-router-dom";
import styles from "./styles/admin.module.css";

const AdminPublication = ({
    _id,
    title,
    imageUrl
}) => {
    return (
        <article className={styles["film-card"]}>
            <img className={styles["film-card-img"]} src={imageUrl} alt={title} />
            <h2 className={styles["film-heading-title"]}>{title}</h2>
            <Link className={styles["delete-details-btn"]} to={`/delete/${_id}`}>Delete Publication</Link>
        </article>
    );
}

export default AdminPublication;