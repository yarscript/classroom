import styles from "../styles/FinishSection.module.scss"

export default function FinishSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <button>&lt;</button>
                <p>3 of 8</p>
                <button>&gt;</button>
            </div>
            <div className={styles.finish}>
                <button>Finish the section</button>
            </div>

        </div>
    )
}