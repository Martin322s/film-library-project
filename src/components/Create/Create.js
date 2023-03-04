import { useState } from "react";
import styles from "./styles/create.module.css";

const Create = () => {
    const [data, setData] = useState({
        title: "",
        category: "",
        imageUrl: "",
        description: ""
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const createHandler = (ev) => {
        ev.preventDefault();
        console.log(data);
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
                    onSubmit={(ev) => createHandler(ev)}
                >
                    <h1>Create publication</h1>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={data.title}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="category">Category:</label>
                    <input 
                        type="text" 
                        name="category" 
                        id="category" 
                        value={data.category}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input 
                        type="url" 
                        name="imageUrl" 
                        id="imageUrl" 
                        value={data.imageUrl}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        col="2000" 
                        rows="5"
                        name="description"
                        value={data.description}
                        onChange={(ev) => changeHandler(ev)}
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