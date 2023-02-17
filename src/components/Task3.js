import TaskSummary from "@/components/TaskSummary";
import WordList from "@/components/WordList";
import Card from "@/components/Card";
import CardsLayout from "@/components/CardsLayout";
import styles from "../styles/Content.module.scss"
import ChooseWords from "@/components/ChooseWords";
import TeachersNote from "@/components/TeachersNote";
export default function Task3() {
    return (
        <>
            <TaskSummary />
            <TeachersNote />
        </>
    )
}