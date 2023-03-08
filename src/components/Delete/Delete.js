import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as service from "../../services/filmService.js"
import { AuthContext } from "../../contexts/AuthContext";

const Delete = () => {
    const { publicId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        service.deletePublication(publicId, user.accessToken)
            .then(() => {
                navigate("/catalog", { replace: true });
            })
    }, [publicId, user.accessToken, navigate]);
}

export default Delete;