import styles from "./styles/create.module.css";
import popcorn from "./images/popcorn.jpg";

const Create = () => {
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
                <form className={styles["create"]}>
                    <h1>Create publication</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" />
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" id="category" />
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="url" name="imageUrl" id="imageUrl" />
                    <label htmlFor="description">Description:</label>
                    <textarea col="2000" rows="5"></textarea>
                    <div>
                        <button className={styles["btn"]}>Create</button>
                    </div>
                </form>
            </section>
            <img className={styles["popcorn-img"]} src={popcorn} alt="popcorn" />
        </main>
    );
}

export default Create;