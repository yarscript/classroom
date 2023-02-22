import TaskSummary from "@/components/TaskSummary";
import {useEffect, useState} from "react";
import SectionLayout from "@/components/SectionLayout";
import axios from "axios";
import Word from "@/components/Word";
import Image from "next/image";
import TasksLayout from "@/components/TasksLayout";
import TaskLayout from "@/components/TaskLayout";

export default function WordList() {

    const [isOpen, setOpen] = useState(true)
    const [words, setWords] = useState([])

    const taskInfo = {
        number: '1.1',
        explanation: 'Wordlist'
    }

    const getWords = async () => {
        const result = await axios(`http://localhost:3000/api/words`);
        setWords(result.data)
    }
    useEffect( () => {
        getWords()
    }, [])

    return (
        <TasksLayout>
            <TaskLayout>
                <TaskSummary taskInfo={taskInfo} isOpen={isOpen} setOpen={setOpen}/>
                <SectionLayout isOpen={isOpen}>
                    {words.map(word => <Word word={word} last={words.length}/>)}
                    <button className='w-[170px] h-10 text-primary bg-transparent border border-primary rounded mt-[19px] mb-10'>
                        <Image className='inline mr-2' src='/add_word_icon.svg' width={19} height={14} alt='add words'></Image>Add all words</button>
                </SectionLayout>
            </TaskLayout>
        </TasksLayout>
    )
}