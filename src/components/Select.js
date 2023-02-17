import styles from "../styles/Select.module.scss"
export default function Select() {
    return (
        <select className={styles.select}>
            <option>value1</option>
            <option>value2</option>
            <option>value3</option>
            <option>value4</option>
            <option>value5</option>
        </select>
    )
}