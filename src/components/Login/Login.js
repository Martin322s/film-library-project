import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as service from "../../services/authService";
import styles from "./styles/login.module.css";
import "./styles/responsive/responsive.css";
import people from "./images/people.webp";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const submitHandler = (ev, userData) => {
        ev.preventDefault();

        setIsLoading(true);
        if (userData.email === "" || userData.password === "") {
            alert("Invalid data provided!");
        } else {
            try {
                const emailRegExp = new RegExp('^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+.[a-zA-Z]{2})$');
                if (emailRegExp.test(userData.email)) {
                    service.loginUser(userData)
                        .then(result => {
                            if (!result.message) {
                                userLogin(result);
                                navigate("/", { replace: true });
                                setIsLoading(false);
                            } else {
                                alert("Invalid email or password!");
                            }
                        });
                }
            } catch (err) {
                alert(err);
            }
        }
    };

    // eslint-disable-next-line
    return (
        <main>
            <aside>
                <h2 className={styles["aside-heading"]}>If you have an account, you can:</h2>
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
                    className={styles["login"]}
                    onSubmit={(ev) => submitHandler(ev, data)}
                >
                    <h1>Sign In to your account</h1>
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
                    <p>
                        You don't have an account? <Link to="/register" replace>Sign Up</Link>
                    </p>
                    <button className={styles["btn"]}>
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
            </section>
            <img className={styles["people"]} src={people} alt="people" />
        </main>
    );
}

export default Login;