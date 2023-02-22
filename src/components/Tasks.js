import TaskLayout from "@/components/TaskLayout";
import Task1 from "@/components/Task1";
import Task2 from "@/components/Task2";
import Task3 from "@/components/Task3";
import TeachersNote from "@/components/TeachersNote";
import FinishSection from "@/components/FinishSection";
import WordList from "@/components/WordList";
import TasksLayout from "@/components/TasksLayout";
import Words from "@/components/Words";

export default function Tasks() {
    return (
        <TasksLayout>
            <TaskLayout>
                <h1>Vocabulary: clothes</h1>
            </TaskLayout>
            <hr/>
            <TaskLayout>
                <TeachersNote />
            </TaskLayout>
            <hr/>
            <TaskLayout>
                <Words/>
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
        </TasksLayout>
    )
}