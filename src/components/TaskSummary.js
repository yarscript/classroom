import styles from "../styles/TaskSummary.module.scss"
export default function TaskSummary() {
    return (
        <>
            <div className={styles.summary}>
                <div className={styles.info}>
                    <button>1.1</button>
                    <h2>Match the words to the pictures</h2>
                </div>
                <div className={styles.buttons}>
                    <button>^</button>
                    <button>:</button>
                </div>
            </div>
        </>
    )
}