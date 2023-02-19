import TaskSummary from "@/components/TaskSummary";
import styles from "../styles/Content.module.scss"
import TeachersNote from "@/components/TeachersNote";
import {useState} from "react";
export default function Task3() {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <TaskSummary isOpen={isOpen} setOpen={setOpen}/>
            <div className={styles.taskContent} style={isOpen ? {display: "none"} : {display: "block"}}>
                <TeachersNote />
            </div>
        </>
    )
}