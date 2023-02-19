import styles from "../styles/TaskSummary.module.scss"
import Image from "next/image";
import React, { useState } from 'react'
export default function TaskSummary({isOpen, setOpen}) {

    return (
        <>
            <div className={styles.summary}>
                <div className={styles.info}>
                    <button>1.1</button>
                    <h2>Match the words to the pictures</h2>
                </div>
                <div className={styles.buttons}>
                    <button id={styles.close}
                            onClick={() => setOpen(isOpen => !isOpen)} style={isOpen ? { display: "none"} : {display: "inline-flex"}}>
                        <Image src='/close_section_icon.svg' width={12} height={6} alt='close'></Image>
                    </button>
                    <button id={styles.open}
                            onClick={() => setOpen(isOpen => !isOpen)} style={!isOpen ? { display: "none"} : {display: "inline-flex"}}>
                        <Image src='/open_section_icon.svg' width={12} height={6} alt='open'></Image>
                    </button>
                    <button><Image src='/dots_icon.svg' width={4} height={18} alt='more'></Image></button>
                </div>
            </div>
        </>
    )
}