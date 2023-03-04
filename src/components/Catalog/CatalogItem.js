import { Link } from "react-router-dom";

const CatalogItem = ({
    title,
    imageUrl,
    description
}) => {
    return (
        <article className="film">
            <img className="film-img" src={imageUrl} alt="fast-x" />
            <h2 className="film-heading">{title}</h2>
            <p>
                {description}
            </p>
            <Link className="link-details" to="/">Details</Link>
        </article>
    );
}

export default CatalogItem;