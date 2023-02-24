import TaskSummary from "./TaskSummary";
import Words from "./Words";
import Card from "./Card";
import CardsLayout from "./CardsLayout";
import React, { useState } from 'react'
import SectionLayout from "./SectionLayout";
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