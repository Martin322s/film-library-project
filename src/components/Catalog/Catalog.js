import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import * as service from "../../services/filmService";
import CatalogItem from "./CatalogItem";
import "./styles/catalog.css";

const Catalog = () => {
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const location = useLocation();
    const queryParams = Number(location.search.substring(6));
    const totalPages = Math.ceil(films.length / 10);
    const cases = {};

    for (let i = 1; i <= totalPages; i++) {
        cases[i] = i;
    }

    console.log(films);

    useEffect(() => {
        service.getAll()
            .then(result => {
                if (cases[queryParams]) {
                    setFilms(result);
                }
            });
    }, []);

    function displayItems() {
        const startIndex = (currentPage - 1) * 10;
        const endIndex = startIndex + 10;
        return films.slice(startIndex, endIndex).map(film => (
            <li key={film._id}>{film.name}</li>
        ));
    }

    // Define a function to display the pagination links
    function displayPagination() {
        const totalItems = films.length;
        const totalPages = Math.ceil(totalItems / 10);
        const links = [];
        for (let i = 1; i <= totalPages; i++) {
            links.push(
                <Link key={i} to={`/catalog?page=${i}`} onClick={() => setCurrentPage(i)}>
                    {i}
                </Link>
            );
        }
        return links;
    }

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
                <div className="pagination">
                    <ul role={"list"}>{displayItems()}</ul>
                    <div>{displayPagination()}</div>
                </div>

            </section>
        </main>
    );
}

export default Catalog;