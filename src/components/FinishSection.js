import styles from "../styles/FinishSection.module.scss"
import Image from "next/image";

export default function FinishSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <button><Image src='/back_icon.svg' width={6} height={12} alt='back'></Image></button>
                <p>3 of 8</p>
                <button><Image src='/forward_icon.svg' width={6} height={12} alt='forward'></Image></button>
            </div>
            <div className={styles.finish}>
                <button>Finish the section</button>
            </div>

        </div>
    )
}