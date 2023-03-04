import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as service from "../../services/filmService";
import styles from "./styles/create.module.css";

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const token = user.accessToken;
    const _ownerId = user._id;
    const [data, setData] = useState({
        title: "",
        category: "",
        imageUrl: "",
        content: ""
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const createHandler = (ev, filmData) => {
        ev.preventDefault();
        
        if (!filmData.imageUrl.startsWith("https://")) {
            alert("Please enter a valid URL address");
        } else {
            try {
                service.createFilm({ ...filmData, _ownerId }, token)
                    .then(result => {
                        navigate("/catalog", { replace: true });
                    });
            } catch (err) {
                alert(err);
            }
        }
    };

    return (
        <main>
            <aside>
                <h2 className={styles["aside-heading"]}>Create publication for your favourite films</h2>
                {/* eslint-disable-next-line */}
                <ul className={styles["categories"]} role={"list"}>
                    <li>- Share you favourite films</li>
                    <li>- Save the best films to your watchlist</li>
                    <li>- Edit and Delete your own sharings</li>
                    <li>and much more...</li>
                </ul>
            </aside>
            <section className={styles["content"]}>
                <form 
                    className={styles["create"]}
                    onSubmit={(ev) => createHandler(ev, data)}
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
                    <label htmlFor="content">content:</label>
                    <textarea 
                        col="2000" 
                        rows="5"
                        name="content"
                        value={data.content}
                        onChange={(ev) => changeHandler(ev)}
                        required
                    ></textarea>
                    <div>
                        <button className={styles["btn"]}>Create</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Create;