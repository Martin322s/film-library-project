import { Link } from "react-router-dom";
import "./styles/main-content.css";
import creed from "./images/creed.jfif";
import fastX from "./images/fast-x.jpg";
import meg from "./images/meg.jpg";
import main from "./images/main.png";

const Home = () => {
    return (
        <main>
            <aside>
                <h2 className="aside-heading">Categories</h2>
                <ul className="categories">
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
            <section className="content">
                <img className="main-photo" src={main} alt="main" />
                <h3 className="latest">Latest Films...</h3>
                <div className="films">
                    <article className="film">
                        <img className="film-img" src={fastX} alt="fast-x" />
                        <Link
                            className="link"
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
                    <article className="film">
                        <img className="film-img" src={creed} alt="creed" />
                        <Link
                            className="link"
                            to="https://www.youtube.com/watch?v=AHmCH7iB_IM"
                            target="_blank"
                            rel="noreferrer"
                            replace
                        >
                            Watch Trailer
                        </Link>
                        <h2>Creed III</h2>
                        <p>
                            Creed III is a 2022 American sports drama film directed by Michael
                            B. Jordan ( in his directorial debut).
                        </p>
                    </article>
                    <article className="film">
                        <img className="film-img" src={meg} alt="meg" />
                        <Link
                            className="link"
                            to="https://www.youtube.com/watch?v=Bpz8apWAhyw"
                            target="_blank"
                            rel="noreferrer"
                            replace
                        >
                            Watch Trailer
                        </Link>
                        <h2>The Meg II</h2>
                        <p>
                            Mega Beast 2 is an upcoming 2023 American science fiction action
                            film directed by Ben Whitley, written by Dean Georgaris, John Hoeber
                            and Erich Hoeber, based on the book The Trench written by Steve
                            Olton.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Home;