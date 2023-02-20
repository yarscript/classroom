import TaskSummary from "@/components/TaskSummary";
import WordList from "@/components/WordList";
import Card from "@/components/Card";
import CardsLayout from "@/components/CardsLayout";
import styles from "../styles/Content.module.scss"
import React, { useState } from 'react'
export default function Task1() {

    const [isOpen, setOpen] = useState(true)
    const taskInfo = {
        number: '1.1',
        explanation: 'Match the words to the pictures'
    }
    return (
        <>
            <TaskSummary taskInfo = {taskInfo} isOpen={isOpen} setOpen={setOpen}/>
            <div className={styles.taskContent} style={isOpen ? {display: "block"} : {display: "none"}}>
                <WordList />
                <CardsLayout>
                    <div className={styles.cards}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </CardsLayout>
            </div>
        </>
    )
}