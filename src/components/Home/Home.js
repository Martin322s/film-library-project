import styles from "./styles/main-content.module.css";
import "./styles/responsive/responsive-600.css";
import * as service from "../../services/filmService";
import main from "./images/main-two.jpeg";
import FilmItem from "./FilmItem";
import { useEffect, useState } from "react";

const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(result => {
                const lastThree = result.slice(-3);
                setFilms(lastThree);
            })
    }, []);

    return (
        <main>
            <aside>
                <h2 className={styles["aside-heading"]}>Categories</h2>
                <ul className={styles["categories"]}>
                    <li>Action</li>
                    <li>Comedy</li>
                    <li>Criminal</li>
                    <li>Thriller</li>
                    <li>Horrors</li>
                    <li>Documentary</li>
                    <li>Biographical</li>
                    <li>Musical</li>
                    <li>Asian</li>
                    <li>Scandinavian</li>
                    <li>Sporty</li>
                    <li>European</li>
                    <li>Indian</li>
                    <li>Russian</li>
                    <li>Bulgarian</li>
                    <li>Family</li>
                    <li>Historical</li>
                    <li>Adventurous</li>
                    <li>Romantic</li>
                    <li>Drama</li>
                </ul>
            </aside>
            <section className={styles["content"]}>
                <img className={styles["main-photo"]} src={main} alt="main" />
                <h3 className={styles["latest"]}>Latest Films...</h3>
                <div className={styles["films"]}>
                    {films.length > 0
                        ?
                        films.map(film => <FilmItem key={film._id} {...film} />)
                        :
                        <h1 className="empty-catalog">There are no publications yet.</h1>
                    }
                </div>
            </section>
        </main>
    );
}

export default Home;