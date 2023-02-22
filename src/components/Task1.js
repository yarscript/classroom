import TaskSummary from "@/components/TaskSummary";
import Words from "@/components/Words";
import Card from "@/components/Card";
import CardsLayout from "@/components/CardsLayout";
import React, { useState } from 'react'
import SectionLayout from "@/components/SectionLayout";
export default function Task1() {

    const [isOpen, setOpen] = useState(true)
    const taskInfo = {
        number: '1.1',
        explanation: 'Match the words to the pictures'
    }
    return (
        <>
            <TaskSummary taskInfo = {taskInfo} isOpen={isOpen} setOpen={setOpen}/>
            <SectionLayout isOpen={isOpen}>
                <Words />
                <CardsLayout>
                    <div className='[&>*:nth-child(4)]:mr-0'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </CardsLayout>
            </SectionLayout>
        </>
    )
}