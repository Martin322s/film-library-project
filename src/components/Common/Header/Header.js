import "./styles/navigation.css";
import logo from "./images/logo.png";

const Header = () => {
    return (
        <header className="heading">
            <ul className="heading__navbar" role="list">
                <li className="nav-item-logo">
                    <img src={logo} alt="logo" />
                </li>
                <li className="nav-item">
                    <a href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#">Catalog</a>
                </li>
                <li className="nav-item">
                    <a href="#">Profile</a>
                </li>
                <li className="nav-item">
                    <a href="#">Create</a>
                </li>
                <li className="nav-item">
                    <a href="#">Sign In</a>
                </li>
                <li className="nav-item">
                    <a href="#">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a href="#">Logout</a>
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