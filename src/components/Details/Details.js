import styles from "./styles/details.module.css";
import * as service from "../../services/filmService";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const Details = () => {
    const { publicationId } = useParams();
    const { user } = useContext(AuthContext);
    const [film, setFilm] = useState({});
    const [savedFilms, setSavedFilms] = useState([]);
    const userId = user._id;
    const token = user.accessToken;

    useEffect(() => {
        service.getOne(publicationId)
            .then(result => {
                setFilm(result);
            });
    }, [publicationId]);

    useEffect(() => {
        service.getSavedFilms(userId, token)
            .then(result => {
                setSavedFilms(result);
            });
    }, [token, userId]);

    const saveHandler = () => {
        service.saveFilm(publicationId, userId, token)
            .then(() => {
                service.getSavedFilms(userId, token)
                    .then(result => {
                        setSavedFilms(result);
                    });
            });
    };

    return (
        <section className={styles["details"]}>
            <img className={styles["img-details"]} src={film.imageUrl} alt={film.title} />
            <article>
                <h1 className={styles["details-heading"]}>{film.title} ({film.year})</h1>
                <p className={styles["details-category"]}>{film.category}</p>
                <p className={styles["details-content"]}>
                    {film.content}
                </p>
                {user.accessToken
                    ?
                    <>
                        {film._ownerId === user._id
                            ?
                            <>
                                <Link
                                    className={styles["btn-details-edit"]}
                                    to={`/edit/${publicationId}`}
                                >
                                    Edit
                                </Link>

                                <Link
                                    className={styles["btn-details-delete"]}
                                    to={`/delete/${publicationId}`}
                                >
                                    Delete
                                </Link>

                            </>
                            :
                            <>
                                <button
                                    className={styles["btn-details-save"]}
                                    onClick={() => saveHandler()}
                                    disabled={
                                        savedFilms.filter(x => x._id === publicationId)[0]?._id === publicationId
                                            ? true
                                            : false
                                    }
                                >
                                    Save
                                </button>
                                <Link
                                    className={styles["trailer"]}
                                    to={film.trailerUrl}
                                    target="_blank"
                                >
                                    Watch Trailer
                                </Link>
                            </>

                        }
                    </>
                    : null
                }
            </article>
        </section>
    );
}

export default Details;