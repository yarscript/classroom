import TaskSummary from "@/components/TaskSummary";
import TeachersNote from "@/components/TeachersNote";
import {useState} from "react";
import SectionLayout from "@/components/SectionLayout";
export default function Task3() {

    const [isOpen, setOpen] = useState(true)
    const taskInfo = {
        number: '1.3',
        explanation: 'Read through the sentences and the words in bold with definitions'
    }

    return (
        <>
            <TaskSummary taskInfo={taskInfo} isOpen={isOpen} setOpen={setOpen}/>
            <SectionLayout isOpen={isOpen}>
                <TeachersNote />
            </SectionLayout>
        </>
    )
}