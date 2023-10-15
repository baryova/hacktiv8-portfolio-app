/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Award from "../../components/Award";

const Awards = () => {
    return (
        <div className={styles.container}>
            <Header title="Awards" />
            <section className={styles.section}>
                <Award
                    title="Top 70 Students of Methodist-2 Education Expo Bidang Bahasa Inggris"
                    detail="Issued by SMA Swasta Methodist-2 Medan"
                />
            </section>
        </div>
    );
}

export default Awards;
