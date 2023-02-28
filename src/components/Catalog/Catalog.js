import { Link } from "react-router-dom";
import fastX from "./images/fast-x.jpg";
import styles from "./styles/catalog.css";

const Catalog = () => {
    //eslint-disable-next-line
    return (
        <main>
            <aside>
                <h2 className={styles["aside-heading"]}>Categories</h2>
                {/* eslint-disable-next-line */}
                <ul className={styles["catalog-categories"]} role={"list"}>
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
            <section className={styles["catalog"]}>
            {/* eslint-disable-next-line */}
                <ul className={styles["movies-list"]} role={"list"}>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                    <li>
                        <article className={styles["film"]}>
                            <img className={styles["film-img"]} src={fastX} alt="fast-x" />
                            <Link
                                className={styles["link"]}
                                to="https://www.youtube.com/watch?v=32RAq6JzY-w"
                                target="_blank"
                                rel="noreferrer"
                                replace
                            >
                                Watch Trailer
                            </Link>
                            <h2>Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin,
                                Zach Dean, and Dan Mazeau.
                            </p>
                        </article>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Catalog;