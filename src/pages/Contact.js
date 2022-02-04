import Jump from "../NomNomSVG/Jump.svg";

function Contact() {
    return (
        <div>
            <div className="jump-container">
                <img src={Jump} alt="jump" className='jump'/>
            </div>
            <div className="contact-form">
                <h1>Contact us</h1>
                <fieldset className="contact-fieldset">
                    <legend className="contact-legend">Name</legend>
                    <input type="name" placeholder='"Jimmy John"' className="contact-input" />
                </fieldset>
                <fieldset className="contact-fieldset">
                    <legend className="contact-legend">Email</legend>
                    <input type="email" placeholder='"@email.com"' className="contact-input" /> <br />
                </fieldset>
                <fieldset className="contact-fieldset">
                <legend className="contact-legend">Comment</legend>
                <textarea name="" id="" cols="30" rows="10" placeholder="Say Hello!" className="contact-textarea"></textarea>
                </fieldset>
                <button type="submit" className="create-update-btn">Submit</button>
            </div>
            <h3>Team Email</h3>
            <div>
                <p>dazzo.chris@gmail.com</p>
                <p>kingzyv14@gmail.com</p>
                <p>divonvbell@gmail.com</p>
            </div>
        </div>
        
    );
}

export default Contact;