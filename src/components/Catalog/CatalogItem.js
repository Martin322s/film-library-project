import { Link } from "react-router-dom";

const CatalogItem = ({
    title,
    imageUrl,
    content
}) => {
    return (
        <article className="film">
            <img className="film-img" src={imageUrl} alt="fast-x" />
            <h2 className="film-heading">{title}</h2>
            <p>
                {content}
            </p>
            <Link className="link-details" to="/">Details</Link>
        </article>
    );
}

export default CatalogItem;