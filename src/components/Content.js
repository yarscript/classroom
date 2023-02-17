import Tasks from "@/components/Tasks";
import SideBar from "@/components/SideBar";
import styles from "../styles/Content.module.scss"

export default function Content() {
    return (
        <div className={styles.content}>
            <Tasks />
            <SideBar />
        </div>
    )
}