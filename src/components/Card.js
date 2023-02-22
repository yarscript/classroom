import React from "react";
import styles from "../styles/Card.module.scss"
import Image from "next/image";
import SelectWord from "./SelectMaterial";

export default function Card() {
    return (
        <div className={styles.card}>
            <Image src='/card_image.svg' width={182} height={182} alt='card'></Image>
            <SelectWord />
        </div>
    )
}