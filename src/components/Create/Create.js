import { Link } from "react-router-dom";
import "./styles/create.css";

const Create = () => {
    return (
        <main>
            <aside>
                <h2 className="aside-heading">Create publication for your favourite films</h2>
                <ul className="categories">
                    <li>You can:</li>
                    <li>- Share you favourite films</li>
                    <li>- Save the best films to your watchlist</li>
                    <li>- Edit and Delete your own sharings</li>
                    <li>and much more...</li>
                </ul>
            </aside>
            <section className="content">
                <form className="create">
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
                        <button className="btn">Create</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Create;