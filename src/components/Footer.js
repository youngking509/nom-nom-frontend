import "./Footer.scss";
import { Link } from "react-router-dom";
import Bite from "../NomNomSVG/Bite.svg"
import logoText from "../NomNomSVG/logo-text.svg"; 
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-left">
                <div className="bite-logo">
                    <img src={Bite} alt="bite" className="bite"/>
                    <img src={logoText} alt="logo-text" className="logoText"/>
                </div>
                <div className="footer-col1">
                    <Link to="/recipes" className="recipes-footer">
                        <p>RECIPES</p>
                    </Link>
                    <Link to="/videos" className="videos-footer">
                        <p>VIDEOS</p>
                    </Link>
                    <Link to="/about" className="about-footer">
                        <p>ABOUT</p>
                    </Link>
                    <Link to="/contact" className="contact-footer">
                        <p>CONTACT</p>
                    </Link>
                </div>
                <div className="footer-col2">
                    <p>ACESSIBILITY</p>
                    <p>SECURITY POLICY</p>
                    <p>TERMS OF SERVICE</p>
                    <p>BECOME A MEMBER</p>
                </div>
            </section>
            <section className="footer-right">
                <div className="footer-icons">
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                </div>
                <div className="copyright">
                    <p>© 2022 Nom-Nom, Inc.</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;