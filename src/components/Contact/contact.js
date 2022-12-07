import './contact.css';
import Fade from 'react-reveal/Fade';
import { BsTelephone } from 'react-icons/bs';
import { SlLocationPin } from "react-icons/sl";
import ContactForm from '../Contact-Form/contact-form';

function Contact () {

    return (
        <section id="contact-page">
            <div id="contact-container">
                <Fade left>
                    <ContactForm />
                </Fade>
                <Fade right>
                    <div id="info-and-map">
                        <div id="contact-info" >
                            <div className="contact-info-line">
                                <BsTelephone />
                                <p>(323) 330-4771</p>
                            </div>
                            <div className="contact-info-line">
                                <SlLocationPin />
                                <p>37112 Maple St. Fremont, California 94536</p>
                            </div>
                        </div>
                        <div id="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8324240401694!2d-122.0129625491818!3d37.559011732217634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf996fd28f11%3A0xa6caef984098b6c!2s37112%20Maple%20St%2C%20Fremont%2C%20CA%2094536!5e0!3m2!1sen!2sus!4v1668553453886!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Contact;

