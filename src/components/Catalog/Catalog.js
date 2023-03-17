import { useEffect, useState } from "react";
import * as service from "../../services/filmService";
import CatalogItem from "./CatalogItem";
import "./styles/catalog.css";

const Catalog = () => {
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        service.getAll()
            .then(result => {
                setFilms(result);
            });
    }, []);

    const totalPages = Math.ceil(films.length / 10);
    const indexOfLastItem = currentPage * 10;
    const indexOfFirstItem = indexOfLastItem - 10;
    const currentItems = films.slice(indexOfFirstItem, indexOfLastItem);

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
                {currentPage > 1 && (
                    <button 
                        className="btn-pagination" 
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous Page
                    </button>
                )}
                {currentPage < totalPages && (
                    <button 
                        className="btn-pagination" 
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next Page
                    </button>
                )}
                {/* eslint-disable-next-line */}
                <ul className="movies-list" role={"list"}>
                    {films.length > 0
                        ?
                        currentItems.map(film =>
                            <li key={film._id}>
                                <CatalogItem {...film} />
                            </li>
                        )
                        :
                        <h1 className="empty-catalog">There are no publications yet.</h1>
                    }
                </ul>
            </section>
        </main>
    );
}

export default Catalog;