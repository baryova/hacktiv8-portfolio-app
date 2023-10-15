import mikroskil from "../../assets/img/mikroskil.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import EducationSection from "../../components/EducationSection";

const Education = () => {
    return (
        <div className={styles.container}>
            <Header title="Education" />
            <section className={styles.section}>
                <EducationSection
                    title="Universitas Mikroskil"
                    position="Bachelor's degree, Information System"
                    date="Oct 2020 - 2024"
                    logo={mikroskil}
                />
            </section>
        </div>
    );
}

export default Education;
