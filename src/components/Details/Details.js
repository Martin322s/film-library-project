import styles from "./styles/details.module.css";
import fastX from "../Profile/images/fast-x.jpg";
import { useParams } from "react-router-dom";

const Details = () => {
    const { publicationId } = useParams();
    
    return (
        <section className={styles["details"]}>
            <img className={styles["img-details"]} src={fastX} alt="title" />
            <article>
                <h1 className={styles["details-heading"]}>Film Title</h1>
                <p className={styles["details-category"]}>Film Category</p>
                <p className={styles["details-content"]}>
                    Fugitive Dom Torento and ex-cop Brian O'Connor find themselves on the wrong side of the
                    law in exotic Rio de Janeiro. In Brazil, they must take down a corrupt businessman who
                    would do anything to keep them dead. A hard-nosed federal agent is back on a mission in
                    South America, but he soon finds it hard to tell the good guys from the bad guys.
                    To win their freedom and another high-speed race, they must steal $100 million.
                </p>
                <button className={styles["btn-details"]}>Edit</button>
                <button className={styles["btn-details"]}>Delete</button>
                <button className={styles["btn-details"]}>Save</button>
            </article>
        </section>
    );
}

export default Details;