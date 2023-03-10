import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as service from "../../services/filmService";
import ResultItem from "./ResultItem";
import "../Catalog/styles/catalog.css";

const SearchResults = () => {
    const { criteria } = useParams();
    const [films, setFilms] = useState({
        all: [],
        searched: []
    });
    const search = criteria.toLocaleLowerCase();

    films.searched = films.all.filter(film => film.title.toLowerCase().includes(search));

    useEffect(() => {
        service.getAll()
            .then(result => setFilms(state => ({
                ...state,
                all: result
            })));
    }, []);

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

                {/* eslint-disable-next-line */}
                {films.searched.length > 0
                    ?
                    <ul className="movies-list" role={"list"}>
                        {films.searched.map(film => 
                            <li key={film._id}>
                                <ResultItem {...film} />
                            </li>
                            )
                        }
                    </ul>
                    :
                    <h1 className="not-found">Sorry, nothing was found!</h1>
                }
            </section>
        </main>
    );
}

export default SearchResults;