import styles from "../styles/PreviewModeMessage.module.scss"
import Image from "next/image";
import { useState } from "react";

export default function PreviewModeMessage() {
    const [isShown, setShown] = useState(true)

    return (
        <div className={styles.wrapper} style={isShown ? { display: "flex" } : { display: "none" }}>
            <p>Preview mode</p>
            <button onClick={() => { setShown(!isShown) }}><Image src='/close_icon.svg' width={12} height={12} alt='close'></Image></button>
        </div>
    )
}