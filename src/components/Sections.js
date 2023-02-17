import styles from "../styles/Sections.module.scss"


export default function Sections() {
    return (
        <>
            <h2>Sections</h2>
            <ul className={styles.list}>
                <li>Lesson information</li>
                <li>Warm up</li>
                <li>Vocabulary clothes</li>
                <li>Video listening</li>
                <li>After watching</li>
                <li>Wrap up</li>
                <li>Extra practice</li>
                <li>Finish this unit</li>
            </ul>
        </>
    )
}