import TaskSummary from "@/components/TaskSummary";
import Words from "@/components/Words";
import Card from "@/components/Card";
import CardsLayout from "@/components/CardsLayout";
import ChooseWords from "@/components/ChooseWords";
import {useState} from "react";
import SectionLayout from "@/components/SectionLayout";
export default function Task2() {

    const [isOpen, setOpen] = useState(true)
    const taskInfo = {
        number: '1.2',
        explanation: 'Complete the sentences with the words from the box. Match words to the pictures'
    }

    return (
        <>
            <TaskSummary taskInfo={taskInfo} isOpen={isOpen} setOpen={setOpen}/>
            <SectionLayout isOpen={isOpen}>
                <Words />
                <ChooseWords />
                <CardsLayout>
                    <div className='[&>*:nth-child(4)]:mr-0'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </CardsLayout>
            </SectionLayout>
        </>
    )
}