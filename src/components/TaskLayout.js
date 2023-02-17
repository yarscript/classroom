import styles from "../styles/Content.module.scss"

export default function TaskLayout({ children }) {
    return (
        <div className={styles.taskLayout}>{children}</div>
    )
}