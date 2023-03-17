import { useEffect, useState } from "react";
import * as service from "../../services/filmService";
import PaginationItem from "../Pagination/Pagination";
import CatalogItem from "./CatalogItem";
import "./styles/catalog.css";

const Catalog = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(result => {
                setFilms(result);
            });
    }, []);

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

                {/* eslint-disable-next-line */}
                <ul className="movies-list" role={"list"}>
                    {films.length > 0
                        ?
                        films.map(film =>
                            <li key={film._id}>
                                <CatalogItem {...film} />
                            </li>
                        )
                        :
                        <h1 className="empty-catalog">There are no publications yet.</h1>
                    }
                </ul>
                <PaginationItem />
            </section>
        </main>
    );
}

export default Catalog;