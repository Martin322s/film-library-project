import styles from "./styles/main-content.module.css";

const FilmItem = ({
    title,
    imageUrl
}) => {
    return (
        <article className={styles["film"]}>
            <img className={styles["film-img"]} src={imageUrl} alt="creed" />
            <h2 className={styles["home-img-heading"]}>{title}</h2>
        </article>
    );
}

export default FilmItem;