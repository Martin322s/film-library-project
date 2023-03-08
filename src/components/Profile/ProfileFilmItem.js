import { Link } from "react-router-dom";
import "./styles/profile.module.css";

const ProfileFilmItem = ({
    _id,
    title,
    imageUrl
}) => {
    return (
        <article className="film">
            <img className="film-img" src={imageUrl} alt={title} />
            <h2 className="film-heading-user">{title}</h2>
            <Link className="link-details" to={`/details/${_id}`}>Details</Link>
        </article>
    );
}

export default ProfileFilmItem;