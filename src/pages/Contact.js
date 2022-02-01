

function Contact() {
    return (
        <div>
            <div className="contact-form">
                <h1>Contact us</h1>
                <fieldset className="contact-fieldset">
                    <legend className="contact-legend">NAME</legend>
                    <input type="name" className="contact-input" />
                </fieldset>
                <fieldset className="contact-fieldset">
                    <legend className="contact-legend">Email</legend>
                    <input type="email" className="contact-input" /> <br />
                </fieldset>
                <fieldset className="contact-fieldset">
                <legend className="contact-legend">COMMENT</legend>
                <textarea name="" id="" cols="30" rows="10" placeholder="Say Hello!" className="contact-textarea"></textarea>
                </fieldset>
                <button type="submit" className="submit-btn">Submit</button>
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