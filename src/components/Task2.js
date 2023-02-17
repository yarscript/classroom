import TaskSummary from "@/components/TaskSummary";
import WordList from "@/components/WordList";
import Card from "@/components/Card";
import CardsLayout from "@/components/CardsLayout";
import styles from "../styles/Content.module.scss"
import ChooseWords from "@/components/ChooseWords";
export default function Task2() {
    return (
        <>
            <TaskSummary />
            <WordList />
            <ChooseWords />
            <CardsLayout>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </CardsLayout>
        </>
    )
}