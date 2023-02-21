import TaskLayout from "@/components/TaskLayout";
import Task1 from "@/components/Task1";
import Task2 from "@/components/Task2";
import Task3 from "@/components/Task3";
import TeachersNote from "@/components/TeachersNote";
import FinishSection from "@/components/FinishSection";

export default function Tasks() {
    return (
        <div className='w-[870px] bg-white border-solid border border-border rounded-[20px]'>
            <TaskLayout>
                <h1>Vocabulary: clothes</h1>
            </TaskLayout>
            <hr/>
            <TaskLayout>
                <TeachersNote />
            </TaskLayout>
            <hr/>
            <TaskLayout>
                <Task1 />
            </TaskLayout>
            <hr/>
            <TaskLayout>
                <Task2 />
            </TaskLayout>
            <hr/>
            <TaskLayout>
                <Task3 />
            </TaskLayout>
            <hr/>
            <TaskLayout>
                <FinishSection />
            </TaskLayout>
        </div>
    )
}