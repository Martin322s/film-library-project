import styles from "./styles/details.module.css";
import * as service from "../../services/filmService";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const Details = () => {
    const { publicationId } = useParams();
    const { user } = useContext(AuthContext);
    const [film, setFilm] = useState({});
 
    useEffect(() => {
        service.getOne(publicationId)
            .then(result => {
                setFilm(result);
            });
    }, [publicationId]);

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
                                <button className={styles["btn-details-edit"]}>Edit</button>
                                <button className={styles["btn-details-delete"]}>Delete</button>
                            </>
                            :
                            <>
                                <button
                                    className={styles["btn-details-save"]}
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