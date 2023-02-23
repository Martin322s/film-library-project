import "./styles/login.css";

const Login = () => {
    return (
        <main>
            <aside>
                <h2 className="aside-heading">If you have an account, you can:</h2>
                <ul className="categories">
                    <li>Watch trailers for free</li>
                    <li>Share you favourite films</li>
                    <li>Save the best films to your watchlist</li>
                    <li>and much more...</li>
                </ul>
            </aside>
            <section className="content">
                <form className="login">
                    <h1>Sign In to your account</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <p>
                        You don't have an account? <a href="/">Sign Up</a>
                    </p>
                    <button className="btn">Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default Login;