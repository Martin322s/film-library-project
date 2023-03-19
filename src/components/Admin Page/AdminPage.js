import { useContext, useEffect, useState } from "react";
import * as service from "../../services/authService";
import * as filmService from "../../services/filmService";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles/admin.module.css";
import AdminPageItem from "./AdminPageItem";
import AdminPublication from "./PublicationItem";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        service.getUsers()
            .then(users => setUsers(users));

        filmService.getAll()
            .then(publications => setPublications(publications));
    }, []);

    const userDelete = (userId, token) => {
        service.deleteUser(userId, token)
            .then(() => {
                service.getUsers()
                    .then(users => setUsers(users));
                navigate("/admin-page", { replace: true });
            });
    };

    const updateUser = (userId, token, data) => {
        service.updateUser(userId, token, data)
            .then(() => {
                service.getUsers()
                    .then(users => setUsers(users));
                navigate("/admin-page", { replace: true });
            });
    };

    return (
        <section>
            <h1 className={styles["welcome-user"]}>Full Name: {`${user.firstName} ${user.lastName}`}</h1>
            <h1 className={styles["welcome-user-email"]}>Email: {user.email}</h1>

            <article className={styles["user-publications"]}>
                {/* eslint-disable-next-line */}
                <ul className={styles["created-publications"]} role={"list"}>
                    <h3 className={styles["headings"]}>Registered users:</h3>
                    {users.length > 0
                        ?
                        users.map(x =>
                            <li key={x._id}>
                                <AdminPageItem 
                                    {...x} 
                                    onDelete={() => userDelete(x._id, x.accessToken)} 
                                    onUpdate={() => updateUser(x._id, x.accessToken, {...x, status: 'blocked'})}
                                />
                            </li>
                        )
                        : null
                    }
                </ul>
                {/* eslint-disable-next-line */}
                <ul className={styles["shared-publications"]} role={"list"}>
                    <h3 className={styles["headings"]}>Created publications:</h3>
                    {publications.length > 0
                        ?
                        publications.map(x =>
                            <li key={x._id}>
                                <AdminPublication {...x} />
                            </li>
                        )
                        : null
                    }
                </ul>
            </article>
        </section>
    );
}

export default AdminPage;