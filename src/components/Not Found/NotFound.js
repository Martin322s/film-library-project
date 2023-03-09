import styles from "./styles/notFound.module.css";

const NotFound = () => {
    return (
        <section className={styles["error"]}>  
            <h1 className={styles["error-heading"]}>Error 404</h1>
            <h1 className={styles["error-heading"]}>Page not found!</h1>
            <i className="error-img fas fa-exclamation-triangle"></i>
        </section>
    );
}

export default NotFound;