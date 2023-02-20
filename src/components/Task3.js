import TaskSummary from "@/components/TaskSummary";
import styles from "../styles/Content.module.scss"
import TeachersNote from "@/components/TeachersNote";
import {useState} from "react";
export default function Task3() {

    const [isOpen, setOpen] = useState(true)
    const taskInfo = {
        number: '1.3',
        explanation: 'Read through the sentences and the words in bold with definitions'
    }

    return (
        <>
            <TaskSummary taskInfo={taskInfo} isOpen={isOpen} setOpen={setOpen}/>
            <div className={styles.taskContent} style={isOpen ? {display: "block"} : {display: "none"}}>
                <TeachersNote />
            </div>
        </>
    )
}