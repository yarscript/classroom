import styles from "../styles/Content.module.scss"

export default function CardsLayout({ children }) {
    return (
        <div className={styles.cardsLayout}>{children}</div>
    )
}