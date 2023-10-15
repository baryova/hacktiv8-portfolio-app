/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Skill from "../../components/Skill";

const Skills = () => {
    return (
        <div className={styles.container}>
            <Header title="Skills" />
            <section className={styles.section}>
                <Skill title="PostgreSQL" />
                <Skill title="iReport" />
                <Skill title="HRIS OrangE Operation" />
            </section>
        </div>
    );
}

export default Skills;
