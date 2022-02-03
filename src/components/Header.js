import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../NomNomSVG/logo-stacked.svg";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [showLinks, setShowLinks] = useState(false);
    const [ navBar, setNavShow ] = useState(false);
    let userScrollY = window.scrollY;
    const controlNav = () => {
        if (userScrollY < window.scrollY) {
            setNavShow(true)
        } else {
            setNavShow(false)
        }
    };

    window.addEventListener('scroll', controlNav);

    return (
        <nav className={navBar ? 'navBar-active' : 'navBar'}>
            <div className="nav-left">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo"/>
                </Link>
                <div className="nav-links" id={showLinks ? "hidden" : ""}>
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
                <button className="menuIcon" onClick={() => setShowLinks(!showLinks)}>
                    <MenuIcon />
                </button>
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