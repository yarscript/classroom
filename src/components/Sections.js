import styles from "../styles/Sections.module.scss"
import Link from "next/link";
export default function Sections({sections}) {
    return (
        <>
            <h2>Sections</h2>
            <ul className={styles.list}>
                {sections.map(section =>
                    <Link href={{pathname: `/${section.title}`}}>
                        <li key={section.id}>{section.name}</li>
                    </Link>)}
            </ul>
        </>
    )
}