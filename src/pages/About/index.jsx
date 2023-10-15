import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const About = () => {
    return (
        <div className={styles.container}>
            <Header title="About" />
            <section className={styles.section}>
                <h2>BARYOVA MARTCELIO</h2>
                <h3>Contact</h3>
                <em>+62859106506963</em>
                <em>baryova42@gmail.com</em>
                <h3>About Me</h3>
                <br />
                <div className={styles.icons}>
                    <a href="https://www.linkedin.com/in/baryova/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default About;
