import { Link } from "react-router-dom";

const ProfileFilmItem = ({
    title,
    imageUrl
}) => {
    return (
        <article className="film">
            <img className="film-img" src={imageUrl} alt={title} />
            <h2 className="film-heading-user">{title}</h2>
            <Link className="link-details" to="/">Details</Link>
        </article>
    );
}

export default ProfileFilmItem;