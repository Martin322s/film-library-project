import { Link } from "react-router-dom";
import styles from "./styles/register.module.css";

const Register = () => {
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
                <form className={styles["register"]}>
                    <h1>Register</h1>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="rePassword">Confirm Password:</label>
                    <input type="password" name="rePassword" id="rePassword" />
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