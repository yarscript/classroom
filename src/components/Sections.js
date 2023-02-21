import styles from "../styles/Sections.module.scss"
import {useEffect} from "react";
import axios from "axios";

export default function Sections({sections}) {
    return (
        <>
            <h2>Sections</h2>
            <ul className={styles.list}>
                {sections.map(section => <li>{section.name}</li>)}
            </ul>
        </>
    )
}