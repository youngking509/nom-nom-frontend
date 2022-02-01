import logoCircle from "../NomNomSVG/Circle-text.svg";
import logo from "../NomNomSVG/Bite.svg";

function About() {
    return (
        <div class="about-section">
            <div className="logo-aboutus">
                <img src={logoCircle} alt="logoCircle" className="circle-aboutus"/>
                <img src={logo} alt="logo" className="bite-aboutus"/>
            </div>
            <div className="aboutus-content">
            <p><span className="aboutus-title">Nom-Nom</span> is a content driven web app that allows users to create, update and delete recipies. While providing a search for recipes based on key word and videos for inporation. Created by a group of devs who wanted to combine our interests of cooking into an app. </p>
            </div>
            <div className="team-members">
                <h4>Team Members</h4>
                <ul>
                    <li className="members">Von Bell</li>
                    <li className="members">Chris Dazzo</li>
                    <li className="members">Kingzy Valcourt</li>
                </ul>
            </div>
        </div>
    );
}

export default About;