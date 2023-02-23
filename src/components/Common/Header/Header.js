import "./styles/navigation.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Header = () => {
    return (
        // eslint-disable-next-line
        <header className="heading">
        {/* eslint-disable-next-line */}
            <ul className="heading__navbar" role={"list"}>
                <li className="nav-item-logo">
                    <img src={logo} alt="logo" />
                </li>
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <a href="/">Catalog</a>
                </li>
                <li className="nav-item">
                    <a href="/">Profile</a>
                </li>
                <li className="nav-item">
                    <a href="/">Create</a>
                </li>
                <li className="nav-item">
                    <Link to="/login">Sign In</Link>
                </li>
                <li className="nav-item">
                    <a href="/">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a href="/">Logout</a>
                </li>
                <li className="nav-item-search">
                    <input type="text" placeholder="Search" />
                    <i className="search fas fa-search" />
                    <button className="btn-search">Search</button>
                </li>
            </ul>
            <h1 className="header_heading">
                <i className="fas fa-film" />
                Welcome to Cinema City!
                <i className="fas fa-film" />
            </h1>
        </header>
    );
}

export default Header;