import styles from "../styles/Sidebar.module.scss"
import Image from "next/image";
import Sections from "@/components/Sections";

export default function SideBar({sections}) {
    return (
        <div className={styles.sidebar}>
            <div className={styles.call}>
                <p id={styles.beta}>Beta</p>
                <p id={styles.callText}>Call yor students when the lesson starts</p>
                <div><Image src='/call_icon.svg' width={12} height={12} alt='call'/><p>Start a call</p></div>
            </div>
            <Sections sections={sections}/>
            <hr/>
            <div className={styles.option}>
                <Image src='/homework_icon.svg' width={20} height={20} alt='homework'></Image>
                <p>Exercises for homework</p>
            </div>
            <hr/>
            <div className={styles.option}>
                <Image src='/additional_icon.svg' width={24} height={24} alt='additional'></Image>
                <p>Additional</p>
            </div>
        </div>
    )
}