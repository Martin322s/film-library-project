import "./styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <h1 className="footer_heading">Cinema City</h1>
            <ul role="list">
                <li>About us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Contacts</li>
            </ul>
            <ul role="list">
                <li>Follow us on</li>
                <li className="footer-item">
                    <i className="fab fa-github-square" />
                </li>
                <li className="footer-item">
                    <i className="fab fa-facebook-square" />
                </li>
                <li className="footer-item">
                    <i className="fab fa-instagram" />
                </li>
            </ul>
        </footer>
    );
}

export default Footer;