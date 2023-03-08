import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as service from "../../services/filmService";
import styles from "./styles/edit.module.css";

const Edit = () => {
    const { user } = useContext(AuthContext);
    const { publicId } = useParams();
    const navigate = useNavigate();
    const token = user.accessToken;
    const [data, setData] = useState({
        title: "",
        year: "",
        category: "",
        imageUrl: "",
        trailerUrl: "",
        content: ""
    });

    useEffect(() => {
        service.getOne(publicId)
            .then(result => {
                setData(result);
            });
    }, [publicId]);

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const editHandler = (ev, filmData, accessToken) => {
        ev.preventDefault();

        if (!filmData.imageUrl.startsWith("https://")) {
            alert("Please enter a valid URL address");
        } else {
            try {
                service.editPublication(publicId, accessToken, filmData)
                    .then(() => {
                        navigate(`/details/${publicId}`, { replace: true });
                    });
            } catch (err) {
                alert(err);
            }
        }
    };

    return (
        <main>
            <aside>
                <h2 className={styles["aside-heading"]}>Edit your own publication</h2>
                {/* eslint-disable-next-line */}
                <ul className={styles["categories"]} role={"list"}>
                    <li>- Chnage title</li>
                    <li>- Add more info</li>
                    <li>- Add new photo</li>
                    <li>and much more...</li>
                </ul>
            </aside>
            <section className={styles["content"]}>
                <form
                    className={styles["create"]}
                    onSubmit={(ev) => editHandler(ev, data, token)}
                >
                    <h1>Create publication</h1>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={data.title}
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        value={data.year}
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={data.category}
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="url"
                        name="imageUrl"
                        id="imageUrl"
                        value={data.imageUrl}
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <label htmlFor="trailerUrl">Trailer URL:</label>
                    <input
                        type="url"
                        name="trailerUrl"
                        id="trailerUrl"
                        value={data.trailerUrl}
                        onChange={(ev) => changeHandler(ev)}
                        required
                    />
                    <label htmlFor="content">Content:</label>
                    <textarea
                        col="2000"
                        rows="5"
                        name="content"
                        value={data.content}
                        onChange={(ev) => changeHandler(ev)}
                        required
                    ></textarea>
                    <div>
                        <button className={styles["btn"]}>Edit Film</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Edit;