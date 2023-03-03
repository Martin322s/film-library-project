import { Link } from "react-router-dom";
import fastX from "./images/fast-x.jpg";
import "./styles/catalog.css";

const Catalog = () => {
    //eslint-disable-next-line
    return (
        <main>
            <aside>
                <h2 className="aside-heading">Categories</h2>
                {/* eslint-disable-next-line */}
                <ul className="catalog-categories" role={"list"}>
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
            <section className="catalog">
                {/* <h1 className="empty-catalog">There are no publications yet.</h1> */}
                {/* eslint-disable-next-line */}
                <ul className="movies-list" role={"list"}>
                    <li>
                        <article className="film">
                            <img className="film-img" src={fastX} alt="fast-x" />
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
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
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
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
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
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
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
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
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
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
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
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
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
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
                            <h2 className="film-heading">Fast and Furious 10</h2>
                            <p>
                                Fast X (also known as Fast &amp; Furious 10) is an upcoming American
                                action film directed by Louis Leterrier and written by Justin Lin and
                                Zach Dean.
                            </p>
                            <Link className="link-details" to="/">Details</Link>
                        </article>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Catalog;