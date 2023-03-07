import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const CatalogItem = ({
    _id,
    title,
    imageUrl
}) => {
    const { user } = useContext(AuthContext);
    return (
        <article className="film">
            <img className="film-img" src={imageUrl} alt="fast-x" />
            <h2 className="film-heading">{title}</h2>
            {user.accessToken
                ?
                <Link className="link-details" to={`/details/${_id}`}>Details</Link>
                : null
            }
        </article>
    );
}

export default CatalogItem;