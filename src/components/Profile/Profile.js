import { Link } from "react-router-dom";
import styles from "./styles/profile.module.css";
import fastX from "./images/fast-x.jpg";

const Profile = () => {
    return (
        <section>
            <h1 className={styles["welcome-user"]}>Full Name: Peter Petrov</h1>
            <h1 className={styles["welcome-user-email"]}>Email: user@mail.com</h1>

            <article className={styles["user-publications"]}>
                <ul className={styles["created-publications"]} role={"list"}>
                <h3 className={styles["headings"]}>Created publications:</h3>
                    <li>
                        <article className="film">
                            <img className="film-img" src={fastX} alt="fast-x" />
                            <h2 className="film-heading-user">Fast and Furious 10</h2>
                            <p className={styles["film-details"]}>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin and
                                Zach Dean.
                            </p>
                            <Link className="link-details" to="/">Details</Link>
                        </article>
                    </li>
                    <li>
                        <article className="film">
                            <img className="film-img" src={fastX} alt="fast-x" />
                            <h2 className="film-heading-user">Fast and Furious 10</h2>
                            <p className={styles["film-details"]}>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin and
                                Zach Dean.
                            </p>
                            <Link className="link-details" to="/">Details</Link>
                        </article>
                    </li>

                    <li>
                        <article className="film">
                            <img className="film-img" src={fastX} alt="fast-x" />
                            <h2 className="film-heading-user">Fast and Furious 10</h2>
                            <p className={styles["film-details"]}>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin and
                                Zach Dean.
                            </p>
                            <Link className="link-details" to="/">Details</Link>
                        </article>
                    </li>
                </ul>
                <ul className={styles["shared-publications"]} role={"list"}>
                <h3 className={styles["headings"]}>Shared publications:</h3>
                    <li>
                        <article className="film">
                            <img className="film-img" src={fastX} alt="fast-x" />
                            <h2 className="film-heading-user">Fast and Furious 10</h2>
                            <p className={styles["film-details"]}>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin and
                                Zach Dean.
                            </p>
                            <Link className="link-details" to="/">Details</Link>
                        </article>
                    </li>
                    <li>
                        <article className="film">
                            <img className="film-img" src={fastX} alt="fast-x" />
                            <h2 className="film-heading-user">Fast and Furious 10</h2>
                            <p className={styles["film-details"]}>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin and
                                Zach Dean.
                            </p>
                            <Link className="link-details" to="/">Details</Link>
                        </article>
                    </li>

                    <li>
                        <article className="film">
                            <img className="film-img" src={fastX} alt="fast-x" />
                            <h2 className="film-heading-user">Fast and Furious 10</h2>
                            <p className={styles["film-details"]}>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin and
                                Zach Dean.
                            </p>
                            <Link className="link-details" to="/">Details</Link>
                        </article>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Profile;