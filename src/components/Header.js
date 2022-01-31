import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../NomNomSVG/logo-stacked.svg";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Header() {
    return (
        <nav className="navBar">
            <div className="nav-left">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo"/>
                </Link>
                <div className="nav-links">
                    <Link to="/recipes" className="recipes-link">
                        <div>RECIPES</div>
                    </Link>
                    <Link to="/videos" className="videos-link">
                        <div>VIDEOS</div>
                    </Link>
                    <Link to="/about" className="about-link">
                        <div>ABOUT</div>
                    </Link>
                    <Link to="/contact" className="contact-link">
                        <div>CONTACT</div>
                    </Link>
                </div>
            </div>
            <div className="nav-right">
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
            </div>
        </nav>
    );
}

export default Header;