import styles from "../styles/Card.module.scss"
import Image from "next/image";
import Select from "@/components/Select";

export default function Card() {
    return (
        <div className={styles.card}>
            <Image src='/card_image.svg' width={182} height={182} alt='card'></Image>
            <Select />
        </div>
    )
}