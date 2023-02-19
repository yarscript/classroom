import TaskSummary from "@/components/TaskSummary";
import WordList from "@/components/WordList";
import Card from "@/components/Card";
import CardsLayout from "@/components/CardsLayout";
import styles from "../styles/Content.module.scss"
import ChooseWords from "@/components/ChooseWords";
import {useState} from "react";
export default function Task2() {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <TaskSummary isOpen={isOpen} setOpen={setOpen}/>
            <div className={styles.taskContent} style={isOpen ? {display: "none"} : {display: "block"}}>
                <WordList />
                <ChooseWords />
                <CardsLayout>
                    <div className={styles.cards}>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </CardsLayout>
            </div>
        </>
    )
}