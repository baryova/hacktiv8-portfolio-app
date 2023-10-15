import CDN from "../../assets/img/CDN.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import ExperienceSection from "../../components/ExperienceSection";

const Experience = () => {
    return (
        <div className={styles.container}>
            <Header title="Experience" />
            <section className={styles.section}>
                <ExperienceSection
                    title="Database Administrator"
                    position="PT. Capella Dinamik Nusantara · Full-time"
                    date="Jan 2022 - Present · 1 year 9 mos"
                    logo={CDN}
                />
            </section>
        </div>
    );
}

export default Experience;
