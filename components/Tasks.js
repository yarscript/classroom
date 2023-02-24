import TaskLayout from "./TaskLayout";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import TeachersNote from "./TeachersNote";
import FinishSection from "./FinishSection";
import WordList from "./WordList";
import TasksLayout from "./TasksLayout";
import Words from "./Words";

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