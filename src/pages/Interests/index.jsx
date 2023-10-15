import mikroskil from "../../assets/img/mikroskil.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Interest from "../../components/Interest";

const Interests = () => {
    return (
        <div className={styles.container}>
            <Header title="Interests" />
            <section className={styles.section}>
                <Interest title="Universitas Mikroskil" followers={6353} logo={mikroskil} />
            </section>
        </div>
    );
}

export default Interests;
