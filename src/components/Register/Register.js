import { Link } from "react-router-dom";
import "./styles/register.css";

const Register = () => {
    return (
        <main>
            <aside>
                <h2 className="aside-heading">If you create an account, you can:</h2>
                <ul className="categories">
                    <li>- Watch trailers for free</li>
                    <li>- Share you favourite films</li>
                    <li>- Save the best films to your watchlist</li>
                    <li>and much more...</li>
                </ul>
            </aside>
            <section className="content">
                <form className="register">
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
                    <button className="btn">Sign Up</button>
                </form>
            </section>
        </main>
    );
}

export default Register;