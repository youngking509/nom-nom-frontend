import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navBar">
            <div className="nav-left">
                <Link to="/">
                    <img src="" alt="" />
                </Link>
                <div className="nav-links">
                    <Link to="/recipes">
                        <div>RECIPES</div>
                    </Link>
                    <Link to="/videos">
                        <div>VIDEOS</div>
                    </Link>
                    <Link to="/about">
                        <div>ABOUT</div>
                    </Link>
                    <Link to="/contact">
                        <div>CONTACT</div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;