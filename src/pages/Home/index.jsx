import hacktiv8 from "../../assets/img/hacktiv8.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const Home = () => {
    return (
        <div className={styles.container}>
            <Header title="Home" />
            <section className={styles.section}>
                <img src={hacktiv8} alt="Hacktiv8" className={styles.img} />
            </section>
        </div>
    );
}

export default Home;
