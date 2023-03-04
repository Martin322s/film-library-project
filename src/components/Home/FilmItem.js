import styles from "./styles/main-content.module.css";

const FilmItem = ({
    title,
    imageUrl,
    content
}) => {
    return (
        <article className={styles["film"]}>
            <img className={styles["film-img"]} src={imageUrl} alt="creed" />
            <h2>{title}</h2>
            <p>
                {content}
            </p>
        </article>
    );
}

export default FilmItem;