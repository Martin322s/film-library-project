import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as service from "../../services/authService";
import styles from "./styles/register.module.css";

const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePass: ""
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const submitHandler = (ev, userData) => {
        ev.preventDefault();

        if (userData.password !== userData.rePass) {
            alert("Invalid data provided!");
        } else {
            try {
                service.registerUser(userData)
                    .then(result => {
                        userLogin(userLogin);
                        navigate("/", { replace: true });
                    });
            } catch (err) {
                alert(err);
            }
        }
    };

    // eslint-disable-next-line
    return (
        <main>
            <aside>
                <h2 className={styles["aside-heading"]}>If you create an account, you can:</h2>
                {/* eslint-disable-next-line */}
                <ul className={styles["categories"]} role={"list"}>
                    <li>- Watch trailers for free</li>
                    <li>- Share you favourite films</li>
                    <li>- Save the best films to your watchlist</li>
                    <li>and much more...</li>
                </ul>
            </aside>
            <section className={styles["content"]}>
                <form
                    className={styles["register"]}
                    onSubmit={(ev) => submitHandler(ev, data)}
                >
                    <h1>Register</h1>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={data.firstName}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={data.lastName}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={data.email}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={data.password}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <label htmlFor="rePass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePass"
                        id="rePass"
                        required
                        value={data.rePassword}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <p>
                        Aleready registered? <Link to="/login" replace>Sign In</Link>
                    </p>
                    <button className={styles["btn"]}>Sign Up</button>
                </form>
            </section>
        </main>
    );
}

export default Register;