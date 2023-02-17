import TaskSummary from "@/components/TaskSummary";
import WordList from "@/components/WordList";
import Card from "@/components/Card";
import CardsLayout from "@/components/CardsLayout";
import styles from "../styles/Content.module.scss"
export default function Task1() {
    return (
        <>
            <TaskSummary />
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
        </>
    )
}