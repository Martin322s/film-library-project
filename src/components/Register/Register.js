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

    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        rePass: false
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const submitHandler = (ev, userData) => {
        ev.preventDefault();

        if (userData.password.length < 8
            || !/[A-Z]/.test(userData.password)
            || !/[0-9]/.test(userData.password)
        ) {
            alert("Please enter a valid password!");
        } else {
            if (userData.password !== userData.rePass) {
                alert("Invalid data provided!");
            } else {
                try {
                    const emailRegExp = new RegExp('^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+.[a-zA-Z]{2})$');
                    if (emailRegExp.test(userData.email)) {
                        service.registerUser(userData)
                            .then(result => {
                                if (typeof result !== "string") {
                                    userLogin(result);
                                    navigate("/", { replace: true });
                                } else {
                                    alert("User with this name already exists!");
                                }
                            });
                    }
                } catch (err) {
                    alert(err);
                }
            }
        }
    };

    const minLength = (length, text, type) => {
        if (text.length < length && text !== "") {
            setError(state => ({
                ...state,
                [type]: true
            }));
        } else {
            setError(state => ({
                ...state,
                [type]: false
            }));
        }
    }

    const validator = (regex, text, type) => {
        const regexStr = new RegExp(regex, 'g');
        if (!regexStr.test(text) && text !== "") {
            setError(state => ({
                ...state,
                [type]: true
            }));
        } else {
            setError(state => ({
                ...state,
                [type]: false
            }));
        }
    }

    const passwordsMatch = (passwordOne, passwordTwo, type) => {
        if (passwordOne !== passwordTwo && passwordTwo !== "") {
            setError(state => ({
                ...state,
                [type]: true
            }));
        } else {
            setError(state => ({
                ...state,
                [type]: false
            }));
        }
    }

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
                        onBlur={() => minLength(3, data.firstName, "firstName")}
                    />
                    {error.firstName &&
                        <p className={styles["form-error"]}>First name should be at least 3 characters long!</p>
                    }

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={data.lastName}
                        onChange={(ev) => changeHandler(ev)}
                        onBlur={() => minLength(3, data.lastName, "lastName")}
                    />
                    {error.lastName &&
                        <p className={styles["form-error"]}>Last name should be at least 3 characters long!</p>
                    }

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={data.email}
                        onChange={(ev) => changeHandler(ev)}
                        onBlur={() =>
                            validator("^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$", data.email, "email")}
                    />
                    {error.email &&
                        <p className={styles["form-error"]}>Email is not valid!</p>
                    }

                    <fieldset id="password-field">
                        <legend>Password</legend>
                        <ol>
                            <li
                                className={data.password.length >= 8 ? styles["correct"] : styles["wrong"]}
                            >
                                At least 8 characters long
                            </li>
                            <li
                                className={/[A-Z]/.test(data.password) ? styles["correct"] : styles["wrong"]}
                            >
                                At least 1 upper case character
                            </li>
                            <li
                                className={/[0-9]/.test(data.password) ? styles["correct"] : styles["wrong"]}
                            >
                                At least 1 numeric character
                            </li>
                        </ol>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            value={data.password}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </fieldset>

                    <label htmlFor="rePass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePass"
                        id="rePass"
                        required
                        value={data.rePass}
                        onChange={(ev) => changeHandler(ev)}
                        onBlur={() => passwordsMatch(data.password, data.rePass, "rePass")}
                    />
                    {error.rePass &&
                        <p className={styles["form-error"]}>Passwords do not match!</p>
                    }

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