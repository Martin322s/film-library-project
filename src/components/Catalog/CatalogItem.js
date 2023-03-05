import { Link } from "react-router-dom";

const CatalogItem = ({
    _id,
    title,
    imageUrl
}) => {
    return (
        <article className="film">
            <img className="film-img" src={imageUrl} alt="fast-x" />
            <h2 className="film-heading">{title}</h2>
            <Link className="link-details" to={`/details/${_id}`}>Details</Link>
        </article>
    );
}

export default CatalogItem;