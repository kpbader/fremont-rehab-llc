import './about.css';
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';

function About() {


    return (
        <section id="about-page">
            <div id="about-top">
                <Fade up>
                    <h2>About Us</h2>
                    <p>In many cases, medically supervised detox is the right starting point for overcoming addiction to alcohol or dependence of prescription drugs or narcotics. Fremont Rehab strives to make this step less stressful by focusing on your comfort and safety first. Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
                    <p>Detoxing by yourself or going abruptly is often dangerous. Fremont Rehab lets you taper in a safe, structured manner. We use evidence-based medical practices for controlling withdrawal symptoms and watch over you on a 24-7 basis. Our nursing team is adept at administering medications for gradual tapering. And whenever you feel up to it, you also have the chance to participate in therapy and peer support groups to explore the underlying triggers of addiction and associated mental health disorders.</p>
                </Fade>
            </div>
        <BottomContact />
        </section>
    )
};

export default About;

