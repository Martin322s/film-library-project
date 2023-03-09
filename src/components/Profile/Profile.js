import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles/profile.module.css";
import * as service from "../../services/filmService";
import ProfileFilmItem from "./ProfileFilmItem";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [films, setFilms] = useState([]);
    const [savedFilms, setSavedFilms] = useState([]);

    useEffect(() => {
        service.getMyPublications(id)
            .then(result => {
                setFilms(result);
            });
    }, [id]);

    useEffect(() => {
        service.getSavedFilms(user._id, user.accessToken)
            .then(result => {
                setSavedFilms(result);
            });
    }, [user._id, user.accessToken]);


    return (
        <section>
            <h1 className={styles["welcome-user"]}>Full Name: {`${user.firstName} ${user.lastName}`}</h1>
            <h1 className={styles["welcome-user-email"]}>Email: {user.email}</h1>

            <article className={styles["user-publications"]}>
                {/* eslint-disable-next-line */}
                <ul className={styles["created-publications"]} role={"list"}>
                    <h3 className={styles["headings"]}>Created publications: {films.length}</h3>
                    {films.length > 0
                        ?
                        films.map(film => (
                            <li key={film._id}>
                                <ProfileFilmItem {...film} />
                            </li>
                        ))
                        :
                        <h3 className={styles["headings-created"]}>There are no created publications.</h3>
                    }
                </ul>
                {/* eslint-disable-next-line */}
                <ul className={styles["shared-publications"]} role={"list"}>
                    <h3 className={styles["headings"]}>Saved publications: {savedFilms.length}</h3>
                    {savedFilms.length > 0
                        ? savedFilms.map(film => (
                            <li key={film._id}>
                                <ProfileFilmItem {...film} />
                            </li>
                        ))
                        : <h3 className={styles["headings-shared"]}>There are no saved publications.</h3>
                    }
                </ul>
            </article>
        </section>
    );
}

export default Profile;