import styles from "../styles/PreviewModeMessage.module.scss"
import Image from "next/image";
export default function PreviewModeMessage() {
    return (
        <div className={styles.wrapper}>
            <p>Preview mode</p>
            <button><Image src='/close_icon.svg' width={12} height={12} alt='close'></Image></button>
        </div>
    )
}